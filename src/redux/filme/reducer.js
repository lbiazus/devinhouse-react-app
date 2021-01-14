import * as types from './types';

const INITIAL_STATE = {}

const FilmeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        /*Redux - Sozinho*/
        case types.ARMAZENAR_FILMES:
            return { ...state, filmes: action.payload };
        /* */
        /* Redux-Thunk */
        case types.BUSCAR_FILMES:
            return { ...state, filmes: action.payload }
        case types.SETAR_FILME_ATUAL:
            return { ...state, filmeAtual: action.payload }
        /* */
        default:
            return state;
    }
}

export default FilmeReducer;