import * as types from './types';

const INITIAL_STATE = {}

const GeneroReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.ARMAZENAR_GENEROS:
            return { ...state,  generos: action.payload }
        case types.SETAR_GENERO_ATUAL: 
            console.log("action.payload do reducer ", action.payload);
            return { ...state, generoAtual: action.payload } 
        default:
            return state;
    }
} 

export default GeneroReducer;