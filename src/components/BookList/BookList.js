import React, { Component } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";

class BookList extends Component {
  render() {
    return (
      <AuthContext.Consumer>
        {(authContext) => (
            <ThemeContext.Consumer>
            {(context) => {
              const { isLightTheme, light, dark } = context;
              const theme = isLightTheme ? light : dark;
              const {isLoggedIn} = authContext;
              return (
                <>
                {isLoggedIn && <div
                  className="book-list"
                  style={{ background: theme.bg, color: theme.syntax }}
                >
                  <ul>
                    <li style={{ background: theme.ui }}>How to win friens and influence people</li>
                    <li style={{ background: theme.ui }}>The 7 habit of highly effective people</li>
                    <li style={{ background: theme.ui }}>Rich Dad and Poor Dad</li>
                  </ul>
                </div>}
                </>
              );
            }}
          </ThemeContext.Consumer>
        )}
      </AuthContext.Consumer>
    );
  }
}

export default BookList;
