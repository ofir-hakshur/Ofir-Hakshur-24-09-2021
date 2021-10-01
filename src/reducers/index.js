import unitsReducer from './units';
import themesReducer from './themes';
import currentCityWeatherReducer from './currentCityWeather';
import currentDailyWeatherReducer from './currentDaily';
import favoriteCitiesReducer from './favoriteCities';
import currentCityNameReducer from './currentCityName'
import {combineReducers} from 'redux';

const rootReducer = combineReducers({currentCityName: currentCityNameReducer, favoriteCities: favoriteCitiesReducer, units: unitsReducer, themes: themesReducer, currentCityWeather: currentCityWeatherReducer, currentDaily : currentDailyWeatherReducer});

export default rootReducer;