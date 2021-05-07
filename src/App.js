import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <ul>
            <li>
              <Link className="App-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="App-link" to="/about">
                About Page
              </Link>
            </li>
          </ul>
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
            path="/user/:firstname/:lastname"
            render={({ match }) => {
              return (
                <h1>
                  Welcome {match.params.firstname} {match.params.lastname}
                </h1>
              );
            }}
          ></Route>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
