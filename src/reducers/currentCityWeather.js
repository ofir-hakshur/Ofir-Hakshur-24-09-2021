const currentCityWeatherReducer = (state = [], action) => {
    switch (action.type) {
            case 'CHANGE_CITY':
              return action.payload;
            default:
                return state;
    }
}

export default currentCityWeatherReducer;