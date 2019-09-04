import React, { Component } from "react";

export class Header extends Component {
  state = { HeaderShow: false };

  render() {
    return (
      <>
        {/* start header */}
        {/* start navbar */}
        <nav class="navbar navbar-expand-lg navbar-light my-orange">
          {/* <a class="navbar-brand" href="/">
            Home
          </a> */}
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ml-auto">
              <a class="nav-item nav-link active  " 
              
              href="/">
                Home
              </a>
              {/* <a class="nav-item  nav-link  " href="/">
                Home
              </a> */}
            </div>
          </div>
        </nav>

        {/* end navbar */}
        {/* start header */}
        {/* <div className="mr-auto" style={{ backgroundColor: "orange" }}>
          <ul className="text-warning nav nav-pills nav justify-content-center  ">
            <li className="nav-item text-warning ">
              <a className="text-warning " href="/">
                Home
              </a>

              {this.state.HeaderShow ? (
                <a className="text-warning " href="/material">
                  Back to Material
                </a>
              ) : null}
            </li>
          </ul>

          <h6 className="nav justify-content-start mr-auto">Materials</h6>
        </div> */}
      </>
    );
  }
}

export default Header;
