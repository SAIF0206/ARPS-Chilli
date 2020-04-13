import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../views/layout'
import routes from './routes'

const Router = () => {
    return ( <
        Router >
        <
        Switch >
        <
        Route component = { Login }
        exact path = "/login" / >
        <
        Route path = "/"
        component = { Layout }
        /> <
        /Switch> <
        /Router>
    );
};

export default Router;