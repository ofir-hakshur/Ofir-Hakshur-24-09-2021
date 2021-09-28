import unitsReducer from './units';
import themesReducer from './themes';
import currentCityWeatherReducer from './currentCityWeather';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({units: unitsReducer, themes: themesReducer, currentCityWeather: currentCityWeatherReducer});

export default rootReducer;