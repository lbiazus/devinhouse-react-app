import * as types from './types';

import { FILME_INICIAL } from '../../util/constantes';
import FilmeAPI from '../../services/filme';

/*Redux - Sozinho*/
export const armazenarFilmes = filmes => (
    { 
        type: types.ARMAZENAR_FILMES,
        payload: filmes
    }
)
/* */

/* Redux-Thunk */
export const buscarFilmes = (service = FilmeAPI) => async dispatch => {
    const filmes = await service.buscarFilmes();
    //console.log("filmes ", filmes);
    dispatch({type: types.ARMAZENAR_FILMES, payload: filmes});
}

export const buscarFilme = (id, service = FilmeAPI) => async dispatch => {
    const filme = await service.buscarFilme(id);
    //console.log("filme ", filme);
    dispatch({type: types.SETAR_FILME_ATUAL, filmeAtual: filme});
}

export const excluirFilme = (filme, service = FilmeAPI) => async dispatch => {
    await service.excluirFilme(filme.id);
    dispatch(buscarFilmes());
}

export const inserirFilme = (filme, service = FilmeAPI) => async dispatch => {
    await service.inserirFilme(filme);
    dispatch(buscarFilmes());
}

export const atualizarFilme = (filme, service = FilmeAPI) => async dispatch => {
    await service.atualizarFilme(filme);
    //dispatch(buscarFilmes());
}

export const limparFilmeAtual = () => {
    console.log("Limpou o filme atual")
    return (
    {
        type: types.SETAR_FILME_ATUAL,
        filmeAtual: FILME_INICIAL
    }
)}
/* */

/* Redux Saga */

/* */