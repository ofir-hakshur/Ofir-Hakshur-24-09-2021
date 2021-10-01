import consts from './reducers.consts'

const favoriteCitiesReducer = (state = [], action) => {
    switch (action.type) {
            case 'ADD_TO_FAVORITE_CITIES':
              return addToFavoriteCities(state, action.payload);
            case 'REMOVE_FROMFAVORITE_CITIES':
              return removeFromFavoriteCities(state, action.payload);
            default:
                return state;
    }
}

const addToFavoriteCities = (favoriteCities, cityObj) => {
    const len = favoriteCities.length;
    if (len >= 0 && len < consts.MAX_FAVORITE_CITIES)
    {
        const arr = [...favoriteCities, cityObj];
        return arr;
    }
    return favoriteCities;
}
const removeFromFavoriteCities = (favoriteCities, cityObj) => {
    const len = favoriteCities.filter(e => e.cityName == cityObj.cityName).length;
    if (len != 0)
    {
        const arr = favoriteCities.filter(e => cityObj.cityName != e.cityName);
        return arr;
    }
    return favoriteCities;
}

export default favoriteCitiesReducer;