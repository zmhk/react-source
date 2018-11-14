import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import store from './TodoApp/store'
import { Provider } from 'react-redux'
import App from './TodoApp'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root'));
