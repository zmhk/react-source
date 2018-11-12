import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Home from "../container/Home";
import About from "../container/About";
import ControlPanel from "../container/ControlPanel";
import Layout from "../container/Layout"

export default () => (
    <div>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/controlpanel" component={ControlPanel} />
            <Route path="/layout" component={Layout} />
            <Redirect to="/" />
        </Switch>
    </div>
)
