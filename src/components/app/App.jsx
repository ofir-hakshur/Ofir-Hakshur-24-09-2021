import React, { useState } from 'react'
import Home from '../home/'
import consts from './app.consts'
import Navbar from '../navbar/'
import { Route, Switch } from 'react-router'
import Favorites from '../favorites/Favorites'
import {jsonParseFromLocalStorage} from './app.helpers';

const App = () => {
    const [currentCityWeather, setCurrentCityWeather] = useState(jsonParseFromLocalStorage('telAvivCurrentWeather')) //need to reboots with []
    const [currentCityDailyWeather, setCurrentCityDailyWeather] = useState(jsonParseFromLocalStorage('fetchTelAvivDailyWeather')) //need to reboots with {}
    const [favoriteCities, setFavoriteCities] = useState([])

    const handleAddToFavorites = (cityObject) => {
        const len = favoriteCities.length
        if (len >= 0 && len < consts.MAX_FAVORITE_CITIES)
        {
            const arr = [...favoriteCities, cityObject]
            setFavoriteCities(arr)
        }
    }

    const handleRemoveFromFavorites = (cityObject) => {
        const len = favoriteCities.filter(e => e.cityName == cityObject.cityName).length
        if (len != 0)
        {
            const arr = favoriteCities.filter(e => cityObject.cityName != e.cityName)
            setFavoriteCities(arr)
        }
    }
    
    return (
        <>
            <Navbar/>
            <Switch>
                <Route path='/favorites' render={() => <Favorites favoriteCities={favoriteCities}/>}></Route>
                <Route path='/' render={() => <Home currentCityDailyWeather={currentCityDailyWeather} setCurrentCityDailyWeather={setCurrentCityDailyWeather} currentCityWeather={currentCityWeather} setCurrentCityWeather={setCurrentCityWeather} addToFavorites={handleAddToFavorites} removeFromFavorites={handleRemoveFromFavorites} favoriteCities={favoriteCities}/>}></Route>
            </Switch>
        </>
    )
}

export default App;