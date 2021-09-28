import React from 'react';
import Like from '../like/';
import { useDispatch, useSelector } from 'react-redux';
import {toCelsius, toFarhenheit} from '../../actions/';
import consts from './home.consts';

const ButtonsWrapper = ({currentCityWeather, isCurrentCityInFavoriteList , addToFavorites,removeFromFavorites, currentCityName}) => {
    const units = useSelector(state => state.units);
    const dispatch = useDispatch();

    return (
        <div className='btns-wrapper'>
            {console.log('From buttonsWrapper currentCityWeather', currentCityWeather)}
            {console.log('From buttonsWrapper currentCityName', currentCityName)}
            <div>
                <button className='btn btn-secondary' onClick={() => dispatch(toCelsius())} hidden={units==consts.CELSIUS?true:false}>celsius</button>
                <button className='btn btn-secondary' onClick={() => dispatch(toFarhenheit())} hidden={units==consts.FAHRENHEIT?true:false}>fahrenheit</button>               
            </div>
            <div>
                <Like  display={isCurrentCityInFavoriteList()}/>
                <button className='btn btn-success' hidden={isCurrentCityInFavoriteList()} onClick={() => addToFavorites({'cityWeather': currentCityWeather[0], 'cityName': currentCityName})}>add to favorites</button>
                <button className='btn btn-danger' hidden={!isCurrentCityInFavoriteList()} onClick={() => removeFromFavorites({'cityWeather': currentCityWeather[0], 'cityName': currentCityName})}>remove from favorites</button>
            </div>  
        </div> 
    )
}

export default ButtonsWrapper;