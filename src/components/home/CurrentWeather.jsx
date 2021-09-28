import React from 'react';
import consts from './home.consts';
import {handleTemperature} from './home.helpers';
import {useSelector} from 'react-redux';

const CurrentWeather = ({currentCityName: name }) => {
    const units = useSelector(state => state.units);
    const currentCityWeather = useSelector(state => state.currentCityWeather);

    return (
        <>
            <div className='home-box home-currentWeather'>
                {name} {currentCityWeather && currentCityWeather.length!=0 && handleTemperature(units, currentCityWeather[0].Temperature.Imperial.Value)}
                <span className='home-minorMargin'>{units == consts.FAHRENHEIT ? <span>&#8457;</span> : <span>&#8451;</span>}</span>
            </div>
            <div className='home-weatherText'>
                {currentCityWeather && currentCityWeather.length!=0 && currentCityWeather[0].WeatherText}
            </div>
        </>
    )
}

export default CurrentWeather;