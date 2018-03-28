import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from '../components/app';
import PageNotFound from '../components/page-not-found';

class Router extends React.Component { 
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={ App } />
                    <Route path="/home" component={ App } />
                    <Route component={ PageNotFound } />
                </Switch>
            </BrowserRouter>
        )
    };
}

export default Router;