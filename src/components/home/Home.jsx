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

const Home = ({favoriteCities, addToFavorites, removeFromFavorites, currentCityWeather, setCurrentCityWeather, currentCityDailyWeather, setCurrentCityDailyWeather}) => {
    const themes = useSelector(state => state.themes);
    
    const [suggestedCities, setSuggestedCities] = useState([])
    const [textBox, setTextBox] = useState('')
    const [currentCityName, setCurrentCityName] = useState(consts.TEL_AVIV)
    const [currentCityKey, setCurrentCityKey] = useState(config.telAvivKey)

    const autoComplete = useCallback(debounce((value) => handleAutocomplete(value),consts.ONE_SECOND), [])

    // useEffect(() => {
    //     console.log('useEffect hook')
    //     navigator.geolocation.getCurrentPosition(geoLocationAllowed, geoLocationBlocked)
    // }, [])
    
    const handleAutocomplete = async (textBoxValue) => {
        if (textBoxValue.length > 0)
        {
            //comment the following when real fetch is needed
            //setSuggestedCities(jsonParseFromLocalStorage('autoComplete'))
            //Uncomment it for real fetch data
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
            {console.log('Home rendered - begin')}
            <Search handleTextBoxOnChange={handleTextBoxOnChange} textBox={textBox} suggestedCities={suggestedCities} handleCityOnClick={handleCityOnClick} />

            <ButtonsWrapper 
                currentCityWeather={currentCityWeather}
                isCurrentCityInFavoriteList={isCurrentCityInFavoriteList}
                addToFavorites={addToFavorites}
                removeFromFavorites={removeFromFavorites}
                currentCityName={currentCityName}
            />
            <div className='home-margin'>
                <CurrentWeather currentCityName={currentCityName} currentCityWeather={currentCityWeather} />
                <CurrentForecast currentCityDailyWeather={currentCityDailyWeather} />
            </div>
            {console.log('Home rendered - end')}
        </div>
    )

    async function fetchcurrentCityWeather() {
        const results = await axios.get(`${config.baseRoute}/${config.currentWeatherEndPoint}/${config.telAvivKey}`, {params: {apikey: config.apikey} })
        setCurrentCityWeather(results.data)
    }

    async function fetchcurrentCityDailyWeather() {
        const results = await axios.get(`${config.baseRoute}/${config.dailyWeatherEndPoint}/${config.telAvivKey}`, {params: {apikey: config.apikey} })
        setCurrentCityDailyWeather(results.data)
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
        setCurrentCityName(cityName)
        setCurrentCityKey(cityKey)
        const currentCityWeather = await axios.get(`${config.baseRoute}/${config.currentWeatherEndPoint}/${cityKey}`, {params: {apikey: config.apikey} })
        const currentCityDailyWeather = await axios.get(`${config.baseRoute}/${config.dailyWeatherEndPoint}/${cityKey}`, {params: {apikey: config.apikey} })
        setCurrentCityWeather(currentCityWeather.data)
        setCurrentCityDailyWeather(currentCityDailyWeather.data)
    }
}

export default Home;