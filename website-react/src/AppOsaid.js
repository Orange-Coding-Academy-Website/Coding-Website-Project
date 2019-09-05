import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Html from "./components/Html";
import Css from "./components/Css";
import JQuery from "./components/JQuery";
import JavaScript from "./components/JavaScript";
import PHP from "./components/PHP";
import Mongo from "./components/Mongo";
import ReactC from "./components/ReactC";
import NodeJs from "./components/NodeJs";
import axios from "axios";

export default class AppOsaid extends Component {
  state = {
    postData: {}
  };

  addPost = async (title, subject, priority, component) => {
    const newPostData = {
      title,
      subject,
      priority,
      component
    };
    await this.setState({
      postData: newPostData
    });
    let res = await axios.post(`http://localhost:9000/posts/a`, newPostData);
    console.log(res.data);
    await this.setState({
      HTML: res.data.filter(elem => elem.component === "HTML"),
      CSS: res.data.filter(elem => elem.component === "CSS"),
      PHP: res.data.filter(elem => elem.component === "PHP"),
      JavaScript: res.data.filter(elem => elem.component === "JavaScript"),
      JQuery: res.data.filter(elem => elem.component === "JQuery"),
      Mongo: res.data.filter(elem => elem.component === "Mongo"),
      NodeJs: res.data.filter(elem => elem.component === "NodeJs"),
      ReactC: res.data.filter(elem => elem.component === "ReactC")
    });
    // console.log(this.state.DATA);
  };

  async componentDidMount() {
    axios
      .get(`http://localhost:9000/posts/Posts`)
      .then(response => {
        console.log("CDM", response.data);

        this.setState({
          HTML: response.data.filter(elem => elem.component === "HTML"),
          CSS: response.data.filter(elem => elem.component === "CSS"),
          PHP: response.data.filter(elem => elem.component === "PHP"),
          JavaScript: response.data.filter(
            elem => elem.component === "JavaScript"
          ),
          JQuery: response.data.filter(elem => elem.component === "JQuery"),
          Mongo: response.data.filter(elem => elem.component === "Mongo"),
          NodeJs: response.data.filter(elem => elem.component === "NodeJs"),
          ReactC: response.data.filter(elem => elem.component === "ReactC")
        });
        console.log("React:get response.data", response.data);
      })
      .catch(error => {
        console.log("Error", error);
      });
  }
  //test
  // addPost = (e) => {
  //   const newTodo={
  //    name:''
  //   };
  //   this.setState (
  //     {
  //       postData:[...this.state.postData,newTodo]

  //     }

  //   )

  // }

  render() {
    return (
      <Router>
        <>
          <Route
            exact
            path="/Ask/"
            render={() => (
              <React.Fragment>
                <div
                  className="jumbotron"
                  style={{ height: "200px", marginTop: "-30px" }}
                >
                  <h1>Question and Answer</h1>
                  <p>Feel free to ask. ~Your question will benefit us ♥!</p>
                </div>

                <br />
                <div
                  id="container"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto auto auto auto",
                    gridGap: "3%",
                    margin: "auto",
                    width: "70%"
                  }}
                >
                  <div className="card" style={{ width: "auto" }}>
                    <img
                      src={require("./pics/html.png")}
                      className="card-img-top"
                      alt="HTML"
                    />
                    <div className="card-body">
                      <h5 className="card-title">HTML Section</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="/Ask/HTML" className="btn btn-primary">
                        Go to this section
                      </a>
                    </div>
                  </div>

                  <div className="card" style={{ width: "auto" }}>
                    <img
                      src={require("./pics/css.png")}
                      className="card-img-top"
                      alt="CSS"
                    />
                    <div className="card-body">
                      <h5 className="card-title">CSS Section</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="/Ask/CSS" className="btn btn-primary">
                        Go to this section
                      </a>
                    </div>
                  </div>

                  <div className="card" style={{ width: "auto" }}>
                    <img
                      src={require("./pics/javascript.png")}
                      className="card-img-top"
                      alt="JS"
                    />
                    <div className="card-body">
                      <h5 className="card-title">JavaScript Section</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="/Ask/JavaScript" className="btn btn-primary">
                        Go to this section
                      </a>
                    </div>
                  </div>

                  <div className="card" style={{ width: "auto" }}>
                    <img
                      src={require("./pics/jQuery.png")}
                      className="card-img-top"
                      alt="JQ"
                    />
                    <div className="card-body">
                      <h5 className="card-title">jQuery Section</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="/Ask/JQuery" className="btn btn-primary">
                        Go to this section
                      </a>
                    </div>
                  </div>

                  <div className="card" style={{ width: "auto" }}>
                    <img
                      src={require("./pics/node.png")}
                      className="card-img-top"
                      alt="nodeJs"
                    />
                    <div className="card-body">
                      <h5 className="card-title">NodeJs Section</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="/Ask/NodeJs" className="btn btn-primary">
                        Go to this section
                      </a>
                    </div>
                  </div>

                  <div className="card" style={{ width: "auto" }}>
                    <img
                      src={require("./pics/react.png")}
                      className="card-img-top"
                      alt="React"
                    />
                    <div className="card-body">
                      <h5 className="card-title">React Section</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="ReactC" className="btn btn-primary">
                        Go to this section
                      </a>
                    </div>
                  </div>

                  <div className="card" style={{ width: "auto" }}>
                    <img
                      src={require("./pics/mongo.png")}
                      className="card-img-top"
                      alt="MongoDB"
                    />
                    <div className="card-body">
                      <h5 className="card-title">MongoDB Section</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="/Ask/Mongo" className="btn btn-primary">
                        Go to this section
                      </a>
                    </div>
                  </div>

                  <div className="card" style={{ width: "auto" }}>
                    <img
                      src={require("./pics/php.png")}
                      className="card-img-top"
                      alt="PHP"
                    />
                    <div className="card-body">
                      <h5 className="card-title">PHP Section</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="/Ask/PHP" className="btn btn-primary">
                        Go to this section
                      </a>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            )}
          />

          <Route
            path="/Ask/HTML"
            component={() => (
              <Html
                addPost={this.addPost}
                HTML={this.state.HTML}
                nam={"HTML"}
              />
            )}
          />
          <Route
            path="/Ask/CSS"
            component={() => (
              <Css addPost={this.addPost} CSS={this.state.CSS} nam={"CSS"} />
            )}
          />
          <Route
            path="/Ask/JQuery"
            component={() => (
              <JQuery
                addPost={this.addPost}
                JQuery={this.state.JQuery}
                nam={"JQuery"}
              />
            )}
          />
          <Route
            path="/Ask/JavaScript"
            component={() => (
              <JavaScript
                addPost={this.addPost}
                JavaScript={this.state.JavaScript}
                nam={"JavaScript"}
              />
            )}
          />
          <Route
            path="/Ask/PHP"
            component={() => (
              <PHP addPost={this.addPost} PHP={this.state.PHP} nam={"PHP"} />
            )}
          />
          <Route
            path="/Ask/Mongo"
            component={() => (
              <Mongo
                addPost={this.addPost}
                Mongo={this.state.Mongo}
                nam={"Mongo"}
              />
            )}
          />
          <Route
            path="/Ask/ReactC"
            component={() => (
              <ReactC
                addPost={this.addPost}
                ReactC={this.state.ReactC}
                nam={"ReactC"}
              />
            )}
          />
          <Route
            path="/Ask/NodeJs"
            component={() => (
              <NodeJs
                addPost={this.addPost}
                NodeJs={this.state.NodeJs}
                nam={"NodeJs"}
              />
            )}
          />
        </>
      </Router>
    );
  }
}
