import React, { useState } from 'react'
import Home from '../home/'
import Navbar from '../navbar/'
import { Route, Switch } from 'react-router'
import Favorites from '../favorites/Favorites'

const App = () => {    
    return (
        <>
            <Navbar/>
            <Switch>
                <Route path='/favorites' render={() => <Favorites/>}></Route>
                <Route path='/' render={() => <Home />}></Route>
            </Switch>
        </>
    )
}

export default App;