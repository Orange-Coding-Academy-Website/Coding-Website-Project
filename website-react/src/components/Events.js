import React, { Component } from "react";
export default class Events extends Component {
  render() {
    const { Events } = this.props;
    console.log("events:::", Events);
    return (
      <div style={{ backgroundColor: "#fafafa" }}>
        <div class="container ">
          <div class="row">
            {Events.map(event => (
              <div
                className="col-md-4"
                style={{
                  border: "10px solid #fafafa ",
                  textAlign: "center",
                  margin: "15px 0",
                  padding: "0",
                  backgroundColor: "#fff"
                }}
              >
                <img src={event.img} alt="image" width="100%" height="475" />
                <center>
                  <h3>{event.title} </h3>
                </center>
                <p style={{ margin: "20px 20px 60px 10px" }}>{event.disc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
