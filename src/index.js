import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import getRouter from "./router"

ReactDOM.render(
    <Router>
        <Route>{getRouter()}</Route>
    </Router>,
    document.getElementById('root'));
