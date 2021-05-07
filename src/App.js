import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Route
            exact
            path="/"
            render={() => {
              return <h1>Welcome Home</h1>;
            }}
          ></Route>
          <Route exact path="/about" component={AboutPage}></Route>
          <Route
            exact
            path="/user/:username"
            render={({match}) => {
              return <h1>Welcome {match.params.username}</h1>;
            }}
          ></Route>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
