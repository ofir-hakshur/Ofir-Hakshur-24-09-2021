import consts from './reducers.consts'

const currentCityNameReducer = (state = consts.TEL_AVIV, action) => {
    switch (action.type) {
            case 'CHANGE_CITY_NAME':
              return action.payload;
            default:
                return state;
    }
}

export default currentCityNameReducer;