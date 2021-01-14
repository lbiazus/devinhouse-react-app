import * as types from './types';

/*Redux - Sozinho*/
export const armazenarFilmes = filmes => (
    { 
        type: types.ARMAZENAR_FILMES,
        payload: filmes
    }
)
/* */