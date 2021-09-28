import React, { useState } from 'react'
import Home from '../home/'
import consts from './app.consts'
import Navbar from '../navbar/'
import { Route, Switch } from 'react-router'
import Favorites from '../favorites/Favorites'

const App = () => {
    const [favoriteCities, setFavoriteCities] = useState([])
    const [currentCityName, setCurrentCityName] = useState(consts.TEL_AVIV)

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
                <Route path='/' render={() => <Home currentCityName={currentCityName} setCurrentCityName={setCurrentCityName} addToFavorites={handleAddToFavorites} removeFromFavorites={handleRemoveFromFavorites} favoriteCities={favoriteCities}/>}></Route>
            </Switch>
        </>
    )
}

export default App;