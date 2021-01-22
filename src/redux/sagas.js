import { all } from 'redux-saga/effects';

import filmeSaga from './filme/sagas';
import generoSaga from './genero/sagas';

export default function* rootSaga() {
    yield all([
        filmeSaga(),
        generoSaga()
    ])
}