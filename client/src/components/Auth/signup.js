import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Signup extends Component {
  state = {}
  render() { 
    return ( 
      <div className="signup">
        <form className="signin--signin">
              Username:<br />
              <input
                name="username"
                className="signin--signin__username"
                placeholder="Username"
                onChange={this.handleInputChange}
              />
              <br />
              Password
              <br />
              <input
                name="password"
                className="signin--signin__password"
                placeholder="Password"
                onChange={this.handleInputChange}
              />
              <br />
              <Link to='/invoices'>
                <input
                  className="signin--signin__button"
                  type="submit"
                  value="Sign Up"
                  // onClick={e => this.loginUser(e)}
                />
              </Link>
            </form>
      </div>
    )
  }
}
 
export default Signup;