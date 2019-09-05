import React, { Component } from "react";
export default class Answer extends Component {
  state = {
    StateData: []
  };

  async componentDidMount() {
    await this.setState((this.state.StateData = this.props[this.props.nam]));
  }

  render() {
    return (
      <div>
        <br></br>
        <ul class="list-group" style={{ width: "95%", margin: "auto" }}>
          {this.state.StateData.map(elem => (
            <>
              <div class="card">
                <h5 class="card-header">{elem.title}</h5>
                <div class="card-body">
                  <h5 class="card-title">{elem.subject}</h5>
                  <a href="#" class="btn btn-primary">
                    Comments
                  </a>
                </div>
              </div>
            </>
          ))}
        </ul>
      </div>
    );
  }
}
