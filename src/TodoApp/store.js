import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { reducer as todos } from './todos'
import { reducer as filter } from './filter'

const reducers = combineReducers({ todos, filter });

const win = window;
const storeEnhancers = compose(applyMiddleware(), (win && win.devToolsExtension) ? win.devToolsExtension() : f => f)

const store = createStore(reducers, {}, storeEnhancers)

export default store;