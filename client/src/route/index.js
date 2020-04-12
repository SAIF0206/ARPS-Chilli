import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../views/home/Home'
import Order from '../views/order/Order'
import Login from '../views/login/Login'

const Router = () => {
	return (
		<Router>
			<Switch>
				<Route component={Login} exact path="/login" />
				<Route path="/home" component={Home} />
				<Route path="/order" component={Order} />
				{/* <Route path="/login" component={Login} /> */}
			</Switch>
		</Router>
	);
};

export default Router;
