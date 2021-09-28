const jsonParseFromLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key))
}
export {
    jsonParseFromLocalStorage,
} 