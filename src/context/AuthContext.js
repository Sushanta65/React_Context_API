import { createContext } from "react";
import React, { Component } from "react";

export const AuthContext = createContext();

class AuthContextProvider extends Component {
  // eslint-disable-next-line no-undef
  state = {
    isLoggedIn: false,
  };
  // eslint-disable-next-line no-undef
  loginHandle = () => {
    this.setState({ isLoggedIn: !this.state.isLoggedIn });
  };
  render() {
    return <AuthContext.Provider value={{...this.state, loginHandle: this.loginHandle}}>
        {this.props.children}
        </AuthContext.Provider>;
  }
}

export default AuthContextProvider;
