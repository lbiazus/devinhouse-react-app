import * as types from './types';
import {  all, put, takeLatest } from "redux-saga/effects";

function* inserirGenero(action) {
    console.log("action ", action.payload);
    //yield call(GeneroAPI.inserirGenero, action.payload);
    yield put({type: types.SETAR_GENERO_ATUAL, payload: action.payload})
}

function* watcherInserir() {
    console.log("Entrou no watcher");
    yield takeLatest(types.INSERIR_GENERO, inserirGenero);
}

export default function* generoSaga() {
    yield all([
        watcherInserir()
    ])
}