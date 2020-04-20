import React from "react";
import { BrowserRouter  as Router, Route ,Switch} from "react-router-dom";
// import {hashHistory} from 'react-router'
import "./App.css";
import Login from './views/login/Login'
import Home from './views/home/Home'
import Driver from './views/driver/Driver.jsx'
import OrderDetailPage from './views/order/OrderDetail.page'
import TimeSlider from './components/TimeSlider'
import RoutePlanPage from './views/routePlan/RoutePlan.page'


function App() {
  return (
    <Router >
      <div className="App">
           
        <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/Home" component={Home} />
        <Route path="/Driver" component={Driver} />
        <Route path="/OrderDetailPage" component={OrderDetailPage} />
        {/* <Route path="/OrderInfo/:orderId" component={OrderInfo} /> */}
        <Route path="/TimeSlider" component={TimeSlider} />
        <Route path="/RoutePlan" component={RoutePlanPage} />


        </Switch>
       
      </div>
      </Router>
  );
}

export default App;


