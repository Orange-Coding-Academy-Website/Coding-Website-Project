import React, { Component } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import photo from './photo.png'

export class MaterialBox extends Component {
  state = {
    material: [],
    showMaterial: false
  };
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

  insertMaterial = () => {
    // console.log("kkk")
    this.setState({
      showMaterial: !this.state.showMaterial
    });
    console.log(this.state.showMaterial);
  };

  render() {
    // console.log(this.props.material)
    const { material, a, b, c } = this.props;
      console.log(this.state.material)
    return (
      <>
      
      <div className=" col-md-4">
        
        {/* {material.map((item,index)=>{ */}
        <div
          onClick={this.insertMaterial}
          className="card card-body mb-3 mt-3 "
          style={{ cursor: "pointer" }}
        >
          <h1>
            {material.name} <i className="fas fa-sort-down" />
          </h1>
          {this.state.showMaterial ? (
            <ul className="list-grou ">

              <li className="list-group-item">

                     <a href={material.video} 
                        target="_blank"> 
                        Video
                     </a>

              </li>


              <li className="list-group-item">

              <a href={material.slides} 
              target="_blank">
                slides
               </a>

               </li>

              <li className="list-group-item">
                <a href={material.helpful} 
              target="_blank">
                helpful
                </a>
                </li>

            </ul>
          ) : null}
        </div>

        {/* //  })} */}
      </div>
      </>
    );
  }
}

export default MaterialBox;
