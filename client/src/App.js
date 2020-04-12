import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Login from './views/login/Login'
import Home from './views/home/Home'

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route exact path="/Home" component={Home} />
      </div>
    </Router>
  );
}

export default App;


