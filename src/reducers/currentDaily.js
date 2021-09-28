const currentDailyWeatherReducer = (state = {}, action) => {
    switch (action.type) {
            case 'CHANGE_DAILY':
              return action.payload;
            default:
                return state;
    }
}

export default currentDailyWeatherReducer;