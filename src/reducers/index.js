import unitsReducer from './units';
import themesReducer from './themes';
import currentCityWeatherReducer from './currentCityWeather';
import currentDailyWeatherReducer from './currentDaily';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({units: unitsReducer, themes: themesReducer, currentCityWeather: currentCityWeatherReducer, currentDaily : currentDailyWeatherReducer});

export default rootReducer;