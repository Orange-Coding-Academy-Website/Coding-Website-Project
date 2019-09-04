import React, { Component } from "react";
class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-1" />
          <div class="col-10">
            <div>
              {/* Start slider Picture */}
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    class="active"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                  ></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      className="d-block"
                      src="https://www.orange.jo/EN/PublishingImages/coding-academy_en.png"
                      alt="First slide"
                      style={{ width: "1500px", height: "400px" }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block"
                      src="https://www.orange.jo/EN/PublishingImages/coding-academy_en.png"
                      alt="First slide"
                      style={{ width: "1500px", height: "400px" }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block"
                      src="https://www.orange.jo/EN/PublishingImages/coding-academy_en.png"
                      alt="First slide"
                      style={{ width: "1500px", height: "400px" }}
                    />
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
              {/* End of Slider */}
              <p
                style={{
                  margin: "50px"
                }}
              >
                Orange Jordan launched the Coding Academy project, in
                partnership with Simplon.Co, to offer free programming courses
                in different programming languages for the Jordanian youth, in
                order to enhance the concept of "training for employment" and
                assist them in finding job opportunities in the technology
                sector. Marigny said during a press conference held on Sunday,
                that the decision to launch this new academy falls in line with
                the company's Corporate Social Responsibility (CSR) strategy and
                its ambitious vision of being a trusted, reliable operator that
                pushes technology and its usages, and as digital partners in the
                Kingdom, the company focuses on supporting the youth segment and
                enhancing the opportunities to educate and train them.
              </p>
            </div>
          </div>
        </div>
        <div className="col-1" />
      </div>
    );
  }
}
export default Home;
