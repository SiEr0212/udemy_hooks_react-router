import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Route
            path="/"
            render={() => {
              return <h1>Welcome Home</h1>;
            }}
          ></Route>
          <Route
            path="/about"
            render={() => {
              return <h1>Welcome About Page</h1>;
            }}
          ></Route>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
