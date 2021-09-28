import consts from './home.consts';

const jsonParseFromLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key))
}
const fahrenheitToCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * (5/9)
}

const dateToDayName = (date) => {
    const splitedDate = new Date(date).getDay()
    return consts.DAYS[splitedDate]
}

const handleTemperature = (units, fahrenheit) => {
    if (units == consts.FAHRENHEIT) return fahrenheit
    const celsius = fahrenheitToCelsius(fahrenheit)
    console.log('fdsfdsfsdfsd', celsius, fahrenheit);
    return Number.parseFloat(celsius).toPrecision(3)
  }

const handleTheme = (themes) => {
    // return 'home-layout-' + appTheme
    return 'home-layout-' + themes
}

export {
    jsonParseFromLocalStorage,
    fahrenheitToCelsius,
    dateToDayName,
    handleTemperature,
    handleTheme,
} 