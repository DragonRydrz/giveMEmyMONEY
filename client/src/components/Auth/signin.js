import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Signin extends Component {
  state = {}

  loginUser = e => {
    e.preventDefault();
    const { username, password } = this.state;
  };

  render() { 
    return ( 
      <div className="signin">
        <form className="signin-form">
              Username:<br />
              <input
                name="username"
                className="signin-form_username"
                placeholder="Username"
                onChange={this.handleInputChange}
              />
              <br />
              Password
              <br />
              <input
                name="password"
                className="signin-form_password"
                placeholder="Password"
                onChange={this.handleInputChange}
              />
              <br />
              <Link to='/invoices'>
                <input
                  className="signin-form_button"
                  type="submit"
                  value="Sign In"
                  // onClick={e => this.loginUser(e)}
                />
              </Link>
          </form>
      </div>
     )
  }
}
 
export default Signin;