const SET_INITIALIZED = 'appData/SET_INITIALIZED';

//Action Creators


//Initial State
let initialState = {
    countries: [
        {id: 1, name: 'France', capital: 'Paris', rating: 5},
        {id: 2, name: 'France', capital: 'Paris', rating: 5},
        {id: 3, name: 'France', capital: 'Paris', rating: 5},
        {id: 4, name: 'France', capital: 'Paris', rating: 5},
        {id: 5, name: 'France', capital: 'Paris', rating: 5},
        {id: 6, name: 'France', capital: 'Paris', rating: 5},
        {id: 7, name: 'France', capital: 'Paris', rating: 5},
        {id: 8, name: 'France', capital: 'Paris', rating: 5},
    ],
}

export const countryCards = (state = initialState, action) => {
    let stateCopy = {...state};

    return stateCopy;
}