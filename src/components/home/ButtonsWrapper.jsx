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

    const handleAddRemoveBtnClassName = () => {
        const ans = isCurrentCityInFavoriteList();
        return (ans == true ? 'btn btn-danger' : 'btn btn-success');
    }

    return (
        <div className='btns-wrapper'>
            <div>
                <button className='btn btn-secondary' onClick={units == consts.CELSIUS ? () => dispatch(toFarhenheit()) : () => dispatch(toCelsius())}>{units == consts.CELSIUS ? 'To farhenheit' : 'To celsius'}</button>            
            </div>
            <div>
                <Like  display={isCurrentCityInFavoriteList()}/>
                <button className={handleAddRemoveBtnClassName()}
                     onClick={isCurrentCityInFavoriteList() == true ?() => dispatch(removeFromFavoriteCities({'cityWeather': currentCityWeather[0], 'cityName': currentCityName})) : () => dispatch(addToFavoriteCities({'cityWeather': currentCityWeather[0], 'cityName': currentCityName}))}>
                     {isCurrentCityInFavoriteList() == true ? 'remove from favorites': 'add to favorites'}
                     </button>
            </div>  
        </div> 
    )
}

export default ButtonsWrapper;