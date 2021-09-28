import React from 'react';
import _ from 'lodash';
import consts from './home.consts';
import {handleTemperature, dateToDayName} from './home.helpers';
import {useSelector} from 'react-redux';

const CurrentForecast = ({currentCityDailyWeather}) => {
    const units = useSelector(state => state.units);
    return (
        <div className='row row-cols-auto'>
            {!(_.isEmpty(currentCityDailyWeather)) && currentCityDailyWeather.DailyForecasts.map(e => 
            <div className='home-box home-margin' key={e.EpochDate}> 
                {handleTemperature(units, e.Temperature.Minimum.Value)} - {handleTemperature(units, e.Temperature.Maximum.Value)}
                <span className='home-minorMargin'>{units == consts.FAHRENHEIT ? <span>&#8457;</span> : <span>&#8451;</span>}</span>
                <div>{dateToDayName(e.Date)}</div>
            </div>)}
        </div>
    )
}

export default CurrentForecast