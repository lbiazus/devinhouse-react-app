import { combineReducers } from 'redux';

import filme from './filme/reducer';
import genero from './genero/reducer';

export default combineReducers({
    filme,
    genero
});