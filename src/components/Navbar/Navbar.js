import React, { Component } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";
import ThemeChange from './../ThemeChange';

class Navbar extends Component {
  render() {
    return (
        <AuthContext.Consumer>
            {(auth) => (
                <ThemeContext.Consumer>
                {(context) => {
                    const { isLightTheme, light, dark } = context;
                    const theme = isLightTheme ? light : dark;
                    const {isLoggedIn, loginHandle} = auth;
                  return (
                    <nav
                      style={{
                        background: theme.ui,
                        color: theme.syntax,
                        padding: "10px",
                      }}
                    >
                        <ThemeChange/>
                      <h2>React Context API</h2> 
                      <h5 onClick={loginHandle}>{isLoggedIn? "You are Logged In" : "Login Please"}</h5>
                      <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                      </ul>
                    </nav>
                  );
                }}
              </ThemeContext.Consumer>
            )}
      </AuthContext.Consumer>
    );
  }
}

export default Navbar;
