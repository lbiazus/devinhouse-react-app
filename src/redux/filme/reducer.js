import * as types from './types';

const INITIAL_STATE = {}

const FilmeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        /*Redux - Sozinho*/
        case types.ARMAZENAR_FILMES:
            return { ...state, filmes: action.payload };
        /* */
        /* Redux-Thunk */
        case types.SETAR_FILME_ATUAL:
            return { ...state, filmeAtual: action.filmeAtual }
        /* */
        default:
            return state;
    }
}

export default FilmeReducer;