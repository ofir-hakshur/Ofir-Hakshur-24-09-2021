const themesReducer = (state = 'light', action) => {
    switch (action.type) {
            case 'TO_LIGHT':
              return 'light';
            case 'TO_DARK':
              return 'dark';
            default:
                return state;
    }
}

export default themesReducer;