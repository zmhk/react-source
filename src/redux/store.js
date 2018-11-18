import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducer'

const win = window;
const middlewares = [thunkMiddleware];

const initValues = {
    'First': 0,
    'Second': 10,
    'Third': 20
}

const storeEnhancers = compose(
    applyMiddleware(...middlewares),
    (win && win.devToolsExtension) ? win.devToolsExtension() : f => f
)

const store = createStore(reducer, initValues, storeEnhancers);

export default store;