import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Login from './views/login/Login'
import Home from './views/home/Home'
import Driver from './views/driver/Driver.jsx'
import OrderDetailPage from './views/order/OrderDetail.page'

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Driver" component={Driver} />
        <Route exact path="/OrderDetailPage" component={OrderDetailPage} />

      </div>
    </Router>
  );
}

export default App;


