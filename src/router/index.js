import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Home from "../container/Home";
import About from "../container/About";
import ControlPanel from "../container/ControlPanel";

export default () => (
    <div>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/controlpanel" component={ControlPanel} />
            <Redirect to="/" />
        </Switch>
    </div>
)
