import React, { Component } from "react";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="row">
        <div className="col-1"/>
          <div className="col-10">
            <div>
              {/* Start slider Picture */}


              {/* <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    className="active"
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
                      className="d-block w-100"
                      src="https://www.orange.jo/EN/PublishingImages/coding-academy_en.png"
                      alt="First slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src="https://www.orange.jo/sites/Press/EN/PublishingImages/coding-academy-news.jpg"
                      alt="Second slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src="http://jordantimes.com/sites/default/files/styles/news_inner/public/3-coding.jpg?itok=jj-pJtnY"
                      alt="Third slide"
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
              </div> */}
              <img src="https://www.orange.jo/EN/PublishingImages/coding-academy_en.png" style={{width:'100%'}}/>
              
              
              {/* End of Slider */}
              <p style={{
                margin:'50px'
              }}>
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

            <div>
              <h1>Materials</h1>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </div>
          </div>
        </div>
        <div className="col-1"/>
      </div>
    );
  }
}

export default Home;
