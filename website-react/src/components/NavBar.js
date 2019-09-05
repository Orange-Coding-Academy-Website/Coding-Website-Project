import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import Home from "./Home";
import Ask from "./Ask";
import Courses from "./Courses";
import Events from "./Events";
import Contact from "./Contact";
import Login from "./Login";
import MaterialCode from "../component/MaterialCode";
import AppOsaid from "../AppOsaid";
class NavBar extends Component {
  state = {
    Events: []
  };
  //start back-end call
  componentDidMount() {
    console.log("REACT:get");
    axios
      .get(`http://localhost:9000/events/Events`)
      .then(response => {
        this.setState({ Events: response.data });
        console.log("React:get response.data", response.data);
      })
      .catch(error => {
        console.log("Error", error);
      });
    //end back-end call
  }
  render() {
    return (
      <Router>
        <>
          <div>
            <nav className="navbar  bg" style={{ backgroundColor: "#FFA500" }}>
              <a className="navbar-brand">Orange Coding Academy website</a>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Orange_logo.svg"
                className="float-left"
                style={{
                  width: "35px"
                }}
              />
            </nav>
            <nav className="navbar sticky-top navbar-light bg-light">
              <a className="navbar-brand" href="/">
                Home
              </a>
              <a className="navbar-brand" href="/Courses">
                Courses
              </a>
              <a className="navbar-brand" href="/Ask">
                Ask
              </a>
              <a className="navbar-brand" href="/Events">
                Events
              </a>
              <a className="navbar-brand" href="/Contact">
                About Us
              </a>
              <form className="form-inline">
                <a
                  className="btn"
                  href="/Login"
                  style={{ backgroundColor: "#FFA500" }}
                >
                  Logout
                </a>
              </form>
            </nav>
          </div>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <Home />
              </>
            )}
          />
          <Route path="/Courses" component={MaterialCode} />
          <Route path="/Ask" component={AppOsaid} />
          <Route
            path="/Events"
            component={() => <Events Events={this.state.Events} />}
          />
          <Route path="/Contact" component={Contact} />
          <Route path="/Login" component={Login} />
        </>
      </Router>
    );
  }
}
export default NavBar;
