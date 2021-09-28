import React from 'react'
import './Favorites.css'
import {useSelector, useDispatch} from 'react-redux';
import consts from '../home/home.consts'

function Favorites({favoriteCities}) {
    const themes = useSelector(state => state.themes);
    const units = useSelector(state => state.units);

    return (
        <div style={{backgroundColor: themes}}>
            <div className={`favorites-container ${themes}`}>
                <div className="row row-cols-auto">
                    {favoriteCities.map(e => 
                    <div className='favorites-box' key={e.cityName}> 
                        <div>{e.cityName}</div>
                        <div>{e.cityWeather.Temperature.Metric.Value} <span className='home-minorMargin'>{units == consts.FAHRENHEIT ? <span>&#8457;</span> : <span>&#8451;</span>}</span></div>
                        <div>{e.cityWeather.WeatherText}</div>
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default Favorites