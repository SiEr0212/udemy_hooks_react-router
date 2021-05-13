import React from "react";
import {
  BrowserRouter,
  Route,
  Link,
  NavLink,
  Redirect,
  Prompt,
} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import { useState } from "react";
import messageContext from "./contexts/messageContext";
import "./App.css";
import HomePage from "./pages/HomePage";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [age, setAge] = useState(null);
  const [message, setMessage] = useState("I am being shared");

  const onClickHandle = () => {
    setLoggedIn(!loggedIn);
  };
  const onChangeHandle = (e) => {
    setAge(e.target.value);
  };

  return (
    <BrowserRouter>
      <messageContext.Provider value={[message, setMessage]}>
        <div className="App">
          <header className="App-header">
            <ul className="ul-style">
              <li className="li-style">
                <NavLink
                  className="App-link"
                  to="/"
                  exact
                  activeClassName="Link-active-style"
                >
                  Home
                </NavLink>
              </li>
              <li className="li-style">
                <NavLink
                  className="App-link"
                  to="/about"
                  exact
                  activeClassName="Link-active-style"
                >
                  About Page
                </NavLink>
              </li>
              <li className="li-style">
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
            <Prompt
              when={loggedIn && !age}
              message={(location) => {
                return location.pathname.startsWith("/user")
                  ? true
                  : "Are you sure?";
              }}
            ></Prompt>

            <button className="button" onClick={onClickHandle}>
              {loggedIn ? "logout" : "login"}
            </button>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/about" component={AboutPage}></Route>
            <Route
              exact
              path="/user/:firstname/:lastname"
              render={({ match }) => {
                return loggedIn ? (
                  <h1>
                    <h2>Age: {age}</h2>
                    <input
                      type="text"
                      value={age}
                      onChange={onChangeHandle}
                    ></input>
                    Welcome {match.params.firstname} {match.params.lastname}
                  </h1>
                ) : (
                  <Redirect to="/"></Redirect>
                );
              }}
            ></Route>
          </header>
        </div>
      </messageContext.Provider>
    </BrowserRouter>
  );
}

export default App;
