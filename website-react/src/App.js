import React, { Component } from "react";
import AppTamimi from "./AppTamimi";
import AppOsaid from "./AppOsaid";
import Home from "./components/Home";
import "./App.css";
import NavBar from "./components/NavBar";

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <AppOsaid /> */}
        {/* <button onClick={this.checkServer}>Checking server</button> 
                           <AppTamimi/>
         <AppSharafalden/>*/}
        {/* <AppTamimi /> */}
        <NavBar />
        {
          <nav class="navbar bg" style={{ backgroundColor: "#FFA500" }}>
            <a href="https://www.orange.jo/en/Pages/default.aspx">Orange.jo</a>
            <a href="https://web.facebook.com/OrangeJordan?_rdc=1&_rdr">
              <button type="button" class="btn btn-fb">
                <i class="fab fa-facebook-f pr-1"></i>{" "}
              </button>
            </a>
            <a href="https://twitter.com/orangejo">
              <button type="button" class="btn btn-tw">
                <i class="fab fa-twitter pr-1"></i>{" "}
              </button>
            </a>
            <a href="https://www.linkedin.com/company/orange-jordan">
              <button type="button" class="btn btn-li">
                <i class="fab fa-linkedin-in pr-1"></i>{" "}
              </button>
            </a>
            <a href="https://www.instagram.com/orangejo/">
              <button type="button" class="btn btn-ins">
                <i class="fab fa-instagram pr-1"></i>{" "}
              </button>
            </a>
            <a href="https://www.pinterest.com/orangejordan/">
              <button type="button" class="btn btn-pin">
                <i class="fab fa-pinterest pr-1"></i>{" "}
              </button>
            </a>
            <a href="https://www.youtube.com/user/OrangeMobjordan">
              <button type="button" class="btn btn-yt">
                <i class="fab fa-youtube pr-1"></i>{" "}
              </button>
            </a>
            @Orange2019
          </nav>
        }
      </div>
    );
  }
}
/*
test 
import React, { Component } from "react";
import "./App.css";
import AppSharafalden from "./components/AppSharafalden";
import axios from "axios";
import Home from './components/Home'
import NavBar from "./components/NavBar";
class App extends Component {
  state = {};
*/
