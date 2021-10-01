export const toFarhenheit = () => {
    return {
      type: 'TO_FARHENHEIT'
    }
  }

export const toCelsius = () => {
  return {
    type: 'TO_CELSIUS'
  }
}

export const toLight = () => {
  return {
    type: 'TO_LIGHT'
  }
}

export const toDark = () => {
  return {
    type: 'TO_DARK'
  }
}

export const changeCurrentCity = (city) => {
  return {
    type: 'CHANGE_CITY',
    payload: city
  }
}

export const changeCurrentDaily = (daily) => {
  return {
    type: 'CHANGE_DAILY',
    payload: daily
  }
}

export const addToFavoriteCities = (city) => {
  return {
    type: 'ADD_TO_FAVORITE_CITIES',
    payload: city
  }
}

export const removeFromFavoriteCities = (city) => {
  return {
    type: 'REMOVE_FROMFAVORITE_CITIES',
    payload: city
  }
}

export const changeCityName = (cityName) => {
    return {
    type: 'CHANGE_CITY_NAME',
    payload: cityName
  }
}