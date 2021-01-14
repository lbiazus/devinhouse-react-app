/*Redux - Sozinho*/
/* import { createStore } from 'redux';
import rootReducer from './rootReducer';

export default createStore(rootReducer); */
/* */

/* Redux-Thunk */
/* import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const composeEnhancers =
	typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
		: compose; 

//const enhancer = composeEnhancers(applyMiddleware(thunk));

//export default createStore(rootReducer, applyMiddleware(thunk));
export default createStore(rootReducer, composeEnhancers(applyMiddleware(thunk))); */
/* */

/* Redux Saga */
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

//const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
const storeWithDevTools = compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)(createStore)(rootReducer)

sagaMiddleware.run(rootSaga);

export default storeWithDevTools;
/* */