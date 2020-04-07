import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      UserName: "",
      Password: "",
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      UserName: this.state.UserName,
      Password: this.state.Password,
    };

    axios
      .post("/api/users/login", user)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log("Password Incorrect" + err));
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>
              <p className="lead text-center">Sign in to your ARPS account</p>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="UserName"
                    className="form-control form-control-lg"
                    placeholder="UserName Address"
                    name="UserName"
                    value={this.state.UserName}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="Password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    name="Password"
                    value={this.state.Password}
                    onChange={this.onChange}
                  />
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
