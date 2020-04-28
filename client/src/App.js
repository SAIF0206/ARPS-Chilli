import React from "react";
//consider BrowserRouter or HashRouter
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from './views/login/Login'
import Home from './views/home/Home'
import TimeSlider from './views/home/Order/TimeSlider'
import RoutePlanPage from './views/routePlan/RoutePlan.page'

function App() {
  return (
    <div className="App">
      <Router>
        {/*TODO add auth*/}

        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/Home" component={Home} />
          {/*remove after done*/}
          <Route path="/TimeSlider" component={TimeSlider} />
          <Route path="/RoutePlan" component={RoutePlanPage} />

        </Switch>

      </Router>
    </div>
  );
}

export default App;


