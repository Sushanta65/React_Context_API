import React, { Component, createContext } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  // eslint-disable-next-line no-undef
  state = {
    isLightTheme: true,
    light: { bg: "#eee", ui: "#ddd", syntax: "#555" },
    dark: { bg: "#555", ui: "#333", syntax: "#ddd" },
  };
  // eslint-disable-next-line no-undef
  changeTheme = () => {
      this.setState({isLightTheme: !this.state.isLightTheme})
  }
  render() {
    return (
        <ThemeContext.Provider value={{...this.state, changeTheme: this.changeTheme}}>
            {this.props.children}
        </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
