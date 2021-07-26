import React, { Component } from "react";
import { ThemeContext } from "./../context/ThemeContext";

class ThemeChange extends Component {
  // eslint-disable-next-line no-undef
  static contextType = ThemeContext;
  render() {
    const { changeTheme, isLightTheme } = this.context;
    return (
      <div>
        <button style={{background: isLightTheme? 'black':'white', color: isLightTheme? 'white': 'black'}} onClick={changeTheme}>
          {isLightTheme ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    );
  }
}

export default ThemeChange;
