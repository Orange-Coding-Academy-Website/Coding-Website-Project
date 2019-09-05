import React, { Component } from "react";
import MaterialBox from "./MaterialBox";
import axios from "axios";
import Header from "./Header";
import photo from "./photo.png";

var x = 0;
export class MaterialCode extends Component {
  state = { material: [] };

  //start to response , request from react to server
  componentDidMount() {
    console.log("REACT:get");
    axios
      .get(`http://localhost:9000/materials/all`)
      .then(response => {
        this.setState({ material: response.data });
        console.log("React:get response.data", response.data);
      })
      .catch(error => {
        console.log("Error", error);
      });
    console.log("this.state.material");
  }
  //end of res/req

  render() {
    console.log(this.state.material);
    return (
      <>
        {/* <Header/> */}
        <div className="photo">
          <div className="container MaterialCode">
            <div className="row">
              {this.state.material.map((item, index) => {
                return (
                  <MaterialBox
                    material={item}
                    key={index}
                    a={x++}
                    b={x++}
                    c={x++}
                  />
                );
              })}
              {/* {(x = 0)} */}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MaterialCode;
