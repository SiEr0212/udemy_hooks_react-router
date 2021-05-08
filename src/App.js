import React from "react";
import {
  BrowserRouter,
  Route,
  Link,
  NavLink,
  Redirect,
} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import { useState } from "react";
import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const onClickHandle = () => {
    setLoggedIn(!loggedIn);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <ul>
            <li>
              <NavLink
                className="App-link"
                to="/"
                exact
                activeClassName="Link-active-style"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="App-link"
                to="/about"
                exact
                activeClassName="Link-active-style"
              >
                About Page
              </NavLink>
            </li>
            <li>
              <NavLink
                className="App-link"
                to="/user/john/doe"
                exact
                activeClassName="Link-active-style"
              >
                User John Doe
              </NavLink>
            </li>
          </ul>
          <button onClick={onClickHandle}>
            {loggedIn ? "logout" : "login"}
          </button>
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
              return loggedIn ? (
                <h1>
                  Welcome {match.params.firstname} {match.params.lastname}
                </h1>
              ) : (
                <Redirect to="/"></Redirect>
              );
            }}
          ></Route>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
