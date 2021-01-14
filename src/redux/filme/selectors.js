import { FILME_INICIAL } from "../../util/constantes";

export const getFilmes = store => store.filme.filmes;
export const getFilmeAtual = store => store.filme.filmeAtual || FILME_INICIAL;