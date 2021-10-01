import React, {useState, useEffect, useCallback} from 'react'
import { debounce } from 'lodash'
import axios from 'axios'
import config from '../../config';
import './Home.css'
import consts from './home.consts'
import _ from 'lodash'
import {handleTheme} from './home.helpers';
import {useSelector, useDispatch} from 'react-redux';
import ButtonsWrapper from './ButtonsWrapper';
import CurrentWeather from './CurrentWeather';
import CurrentForecast from './CurrentForecast';
import Search from './Search'
import {changeCurrentCity, changeCurrentDaily, changeCityName} from '../../actions/';

const Home = () => {
    const themes = useSelector(state => state.themes);
    const currentWeather = useSelector(state => state.currentCityWeather)
    const favoriteCities = useSelector(state => state.favoriteCities)
    const currentCityName = useSelector(state => state.currentCityName)
    const dispatch = useDispatch();

    const [suggestedCities, setSuggestedCities] = useState([])
    const [textBox, setTextBox] = useState('')
    const [currentCityKey, setCurrentCityKey] = useState(config.telAvivKey)

    const autoComplete = useCallback(debounce((value) => handleAutocomplete(value),consts.ONE_SECOND), [])

    useEffect(() => {
        if (currentWeather.length == 0){
            navigator.geolocation.getCurrentPosition(geoLocationAllowed, geoLocationBlocked)
        }
    }, [])
    
    const handleAutocomplete = async (textBoxValue) => {
        if (textBoxValue.length > 0)
        {
            const results = await axios.get(`${config.baseRoute}/${config.autoCompleteApiEndPoint}`, {params: {apikey: config.apikey, q: textBoxValue} })
            setSuggestedCities(results.data)
        }
        else setSuggestedCities([])
    }

    const handleTextBoxOnChange = textBoxValue => {
        setTextBox(textBoxValue)
        autoComplete(textBoxValue)
    }

    const handleCityOnClick = async cityName => {
        setTextBox(cityName)
        const cityKey = suggestedCities.filter(obj => obj.LocalizedName == cityName)[0].Key
        setSuggestedCities([])
        if (cityKey != currentCityKey)
        {
            setForeCastWeather(cityName, cityKey)
        }
    }

    const isCurrentCityInFavoriteList = () => {
        const filteredFavorites = favoriteCities.filter(favorite => currentCityName == favorite.cityName)
        if (filteredFavorites.length > 0) return true
        return false
    }

    return (
        <div className={handleTheme(themes)}>

            <Search handleTextBoxOnChange={handleTextBoxOnChange} textBox={textBox} suggestedCities={suggestedCities} handleCityOnClick={handleCityOnClick} />
            
            <ButtonsWrapper 
                isCurrentCityInFavoriteList={isCurrentCityInFavoriteList}
            />
            <div className='home-margin'>
                <CurrentWeather />
                <CurrentForecast />
            </div>
        </div>
    )

    async function fetchcurrentCityWeather() {
        const {data} = await axios.get(`${config.baseRoute}/${config.currentWeatherEndPoint}/${config.telAvivKey}`, {params: {apikey: config.apikey} })
        dispatch(changeCurrentCity(data))
    }

    async function fetchcurrentCityDailyWeather() {
        const {data} = await axios.get(`${config.baseRoute}/${config.dailyWeatherEndPoint}/${config.telAvivKey}`, {params: {apikey: config.apikey} })
        dispatch(changeCurrentDaily(data))
    }

    async function geoLocationAllowed (position){
        const coords = `${position.coords.latitude},${position.coords.longitude}`
        const city = await axios.get(`${config.baseRoute}/${config.geoPositionEndPoint}`, {params: {apikey: config.apikey, q: coords}})
        const cityName = city.data.LocalizedName
        
        const suggestedCitiesForSpesificName = await axios.get(`${config.baseRoute}/${config.autoCompleteApiEndPoint}`, {params: {apikey: config.apikey, q: cityName} })
        const cityKey = suggestedCitiesForSpesificName.data.filter(obj => obj.LocalizedName == cityName)[0].Key

        setForeCastWeather(cityName, cityKey)                
    }

    function geoLocationBlocked(){
        fetchcurrentCityWeather()
        fetchcurrentCityDailyWeather()
    }

    async function setForeCastWeather(cityName, cityKey){
        dispatch(changeCityName(cityName))
        setCurrentCityKey(cityKey)
        const currentCityWeather = await axios.get(`${config.baseRoute}/${config.currentWeatherEndPoint}/${cityKey}`, {params: {apikey: config.apikey} })
        const currentCityDailyWeather = await axios.get(`${config.baseRoute}/${config.dailyWeatherEndPoint}/${cityKey}`, {params: {apikey: config.apikey} })
        dispatch(changeCurrentCity(currentCityWeather.data))
        dispatch(changeCurrentDaily(currentCityDailyWeather.data))
    }
}

export default Home;