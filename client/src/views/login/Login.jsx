import React, { Component } from "react";
import LoginForm from './LoginForm'
class Login extends Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">
                <font color={'#ffffff'}>
                  ARPS
                </font>
                </h1>
                <hr />
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
