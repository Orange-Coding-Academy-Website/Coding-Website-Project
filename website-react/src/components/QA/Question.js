import React, { Component } from "react";

export default class Question extends Component {
  state = {
    title: "",
    subject: "",
    priority: 0
  };

  Submit = e => {
    e.preventDefault();
    if (
      this.state.title === "" ||
      this.state.subject === "" ||
      this.state.priority === 0
    )
      return alert("Please Fill all the input");
    this.props.add(this.state.title, this.state.subject, this.state.priority);

    alert("Question was submitted");
  };

  userInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  selectInput = e => {
    this.setState({
      priority: e.target.value
    });
  };

  render() {
    return (
      <form>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto auto",
            width: "70%",
            margin: "auto"
          }}
          class="form-group"
        >
          <input
            style={{ gridColumnStart: "1", gridColumnEnd: "4" }}
            type="text"
            name="title"
            onChange={this.userInput}
            class="form-control"
            id="inputAddress"
            placeholder="Title"
          />

          <select
            onChange={this.selectInput}
            required
            id="inputState"
            class="form-control"
          >
            <option value="0" selected disabled>
              Priority
            </option>
            <option value="1" name="priority">
              High{" "}
            </option>
            <option value="2" name="priority">
              Medium{" "}
            </option>
            <option value="3" name="priority">
              Low{" "}
            </option>
          </select>
        </div>

        <br />

        <div style={{ width: "70%", margin: "auto" }} className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">Put a Question</span>
          </div>
          <textarea
            name="subject"
            onChange={this.userInput}
            className="form-control"
            aria-label="With textarea"
          ></textarea>
          <button onClick={this.Submit} type="submit" className="btn btn-info">
            Submit
          </button>
        </div>
      </form>
    );
  }
}
