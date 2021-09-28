import React from 'react';
import consts from './home.consts';
import {handleTemperature} from './home.helpers';
import {useSelector} from 'react-redux';

const CurrentWeather = ({currentCityName: name, currentCityWeather: weather }) => {
    const units = useSelector(state => state.units);

    return (
        <>
            <div className='home-box home-currentWeather'>
                {name} {weather && weather.length!=0 && handleTemperature(units, weather[0].Temperature.Imperial.Value)}
                <span className='home-minorMargin'>{units == consts.FAHRENHEIT ? <span>&#8457;</span> : <span>&#8451;</span>}</span>
            </div>
            <div className='home-weatherText'>
                {weather && weather.length!=0 && weather[0].WeatherText}
            </div>
        </>
    )
}

export default CurrentWeather;