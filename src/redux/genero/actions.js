import * as types from './types';

export const inserirGenero = genero => {
    console.log("genero na Action", genero);
    
    return (
    {
        type: types.INSERIR_GENERO,
        payload: genero
    }
)};

export const atualizarGeneroAtual = genero => (
    {
        type: types.SETAR_GENERO_ATUAL,
        payload: genero
    }
);