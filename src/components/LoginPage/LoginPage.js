import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ReactComponent as Planit } from '../icons/planit_logo.svg';

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  } // end login

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <div className="loginDiv">
        {this.props.errors.loginMessage && (
          alert(this.props.errors.loginMessage)
        )}
        <form className="loginForm" onSubmit={this.login}>
          <h1><Planit className="logoFill" width="250px" /></h1>
          <div className="inputDiv">
            <input
              type="text"
              name="username"
              placeholder="username"
              value={this.state.username}
              onChange={this.handleInputChangeFor('username')}
            />
          </div>
          <div className="inputDiv">
            <input
              type="password"
              name="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleInputChangeFor('password')}
            />
          </div>
          <div>
            <button
              className="log-in"
              type="submit"
              name="submit"
              value="Log In">
              Log In
            </button>
          </div>
        </form>
        {/* <br />
        <br /> */}
        <p className="loginRegText">
          Not yet registered?
        </p>
        <center>
          <button
            // type="button"
            className="register"
            onClick={() => { this.props.dispatch({ type: 'SET_TO_REGISTER_MODE' }) }}

          >
            Create New Account
          </button>
        </center>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(LoginPage);
