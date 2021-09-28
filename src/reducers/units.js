const unitsReducer = (state = 'F', action) => {
    switch (action.type) {
            case 'TO_FARHENHEIT':
              return 'F';
            case 'TO_CELSIUS':
              return 'C';
            default:
                return state;
    }
}

export default unitsReducer;