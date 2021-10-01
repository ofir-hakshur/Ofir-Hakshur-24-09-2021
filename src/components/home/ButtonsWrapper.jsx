import React from 'react';
import Like from '../like/';
import { useDispatch, useSelector } from 'react-redux';
import {toCelsius, toFarhenheit, addToFavoriteCities, removeFromFavoriteCities} from '../../actions/';
import consts from './home.consts';

const ButtonsWrapper = ({isCurrentCityInFavoriteList}) => {
    const units = useSelector(state => state.units);
    const currentCityWeather = useSelector(state => state.currentCityWeather)
    const currentCityName = useSelector(state => state.currentCityName)
    const dispatch = useDispatch();

    return (
        <div className='btns-wrapper'>
            <div>
                <button className='btn btn-secondary' onClick={() => dispatch(toCelsius())} hidden={units==consts.CELSIUS?true:false}>celsius</button>
                <button className='btn btn-secondary' onClick={() => dispatch(toFarhenheit())} hidden={units==consts.FAHRENHEIT?true:false}>fahrenheit</button>               
            </div>
            <div>
                <Like  display={isCurrentCityInFavoriteList()}/>
                <button className='btn btn-success' hidden={isCurrentCityInFavoriteList()} onClick={() => dispatch(addToFavoriteCities({'cityWeather': currentCityWeather[0], 'cityName': currentCityName}))}>add to favorites</button>
                <button className='btn btn-danger' hidden={!isCurrentCityInFavoriteList()} onClick={() => dispatch(removeFromFavoriteCities({'cityWeather': currentCityWeather[0], 'cityName': currentCityName}))}>remove from favorites</button>
            </div>  
        </div> 
    )
}

export default ButtonsWrapper;