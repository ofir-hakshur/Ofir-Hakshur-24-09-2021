import unitsReducer from './units';
import themesReducer from './themes';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({units: unitsReducer, themes: themesReducer});

export default rootReducer;