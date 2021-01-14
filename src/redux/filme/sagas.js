import { call, put, takeEvery, all } from 'redux-saga/effects';

import * as types from './types';
import FilmeAPI from '../../services/filme';
//import { FILME_INICIAL } from '../../util/constantes';

function* buscarFilmes() {
    const filmes = yield call(FilmeAPI.buscarFilmes);
    yield put ({type: types.ARMAZENAR_FILMES, payload: filmes});
}

function* buscarFilme(action) {
    const filme = yield call(FilmeAPI.buscarFilme, action.payload);
    yield put ({type: types.SETAR_FILME_ATUAL, payload: filme});
}

function* excluirFilme(action) {
    yield call(FilmeAPI.excluirFilme, action.payload.id);
    yield put ({type: types.BUSCAR_FILMES});
}

function* inserirFilme(action) {;
    yield call(FilmeAPI.inserirFilme, action.payload);
}

function* atualizarFilme(action) {
    yield call(FilmeAPI.atualizarFilme, action.payload);
}

/* function* limparFilmeAtual() {
    yield put({type: types.BUSCAR_FILMES, payload: FILME_INICIAL});
} */

function* watchBuscarFilmes() {
    yield takeEvery(types.BUSCAR_FILMES, buscarFilmes);
}

function* watchBuscarFilme() {
    yield takeEvery(types.BUSCAR_FILME, buscarFilme);
}

function* watchExcluirFilme() {
    yield takeEvery(types.EXCLUIR_FILME, excluirFilme);
}

function* watchInserirFilme() {
    yield takeEvery(types.INSERIR_FILME, inserirFilme);
}

function* watchAtualizarFilme() {
    yield takeEvery(types.ATUALIZAR_FILME, atualizarFilme);
}

/* function* watchLimparFilmeAtual() {
    yield takeEvery(types.LIMPAR_FILME_ATUAL, limparFilmeAtual);
} */

export default function* rootSaga() {
    yield all([
        watchBuscarFilmes(),
        watchBuscarFilme(),
        watchExcluirFilme(),
        watchInserirFilme(),
        watchAtualizarFilme(),
        //watchLimparFilmeAtual()
    ])
}