import React from "react";
import BookList from "./components/BookList/BookList";
import Navbar from "./components/Navbar/Navbar";
import AuthContextProvider from "./context/AuthContext";
import ThemeContextProvider from "./context/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookList />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
