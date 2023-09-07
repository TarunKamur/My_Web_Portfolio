import React from "react";

import img1 from "../assets/portfolio/1.png";
import img2 from "../assets/portfolio/2.png";
import img3 from "../assets/portfolio/3.png";
import img4 from "../assets/portfolio/4.png";
import img5 from "../assets/portfolio/5.png";
import img6 from "../assets/portfolio/6.png";
import img7 from "../assets/portfolio/7.png";
import img8 from "../assets/portfolio/8.png";
import img9 from "../assets/portfolio/9.png";
import img10 from "../assets/portfolio/10.png";
import img11 from "../assets/portfolio/11.png";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";

const Portfolio = () => {
  const handleblog = () => {
    document.getElementById("portfolio_col1").style.display = "flex";
    document.getElementById("portfolio_col2").style.display = "flex";
    document.getElementById("portfolio_col3").style.display = "flex";
    document.getElementById("btn3").style.display = "none";
  };
  return (
    <>
      <div className="section4">
        <div className="container gx-0 px-3 px-md-0">
          <div className="row text-center gx-0">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <h1 className="sec4_h1">
                <img src={icon1} alt="" /> PORTFOLIO
                <img src={icon2} alt="" />
              </h1>
              <p className="px-5 px-md-5 sec4_p">
                I am a young Guy, My aim is to become a full-stack developer and
                machine learner.
              </p>
            </div>
            <div className="col-md-3"></div>
          </div>
          <div className="row gx-0 py-4">
            <div className="row gx-0">
              <div className="col-md-6 col-sm-6 col-12 col-lg-4 my-4">
                <div className="s4_1">
                  <img src={img1} alt="" className="img-fluid" />
                  <div className="overlay">
                    <div className="text">
                      <h4>Furniture Template</h4>
                      <p>Completed With HTML | CSS and Bootstrap 5 </p>
                      <a
                        href="https://waleedcodes.github.io/B-FurnitureTemp/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="btn2 py-2 mt-3 fs-6">
                          Read More
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-12 col-lg-4 my-4">
                <div className="s4_1">
                  <img src={img2} alt="" className="img-fluid" />
                  <div className="overlay">
                    <div className="text">
                      <h4>Maples Resort Template</h4>
                      <p>Completed With HTML | CSS and Bootstrap 5 </p>
                      <a
                        href="https://waleedcodes.github.io/B-TravelTemp/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="btn2 py-2 mt-3 fs-6">
                          Read More
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-12 col-lg-4 my-4">
                <div className="s4_1">
                  <img src={img3} alt="" className="img-fluid" />
                  <div className="overlay">
                    <div className="text">
                      <h4>UTOPIA Template</h4>
                      <p>Completed With HTML | CSS and Bootstrap 5 </p>
                      <a
                        href="https://waleedcodes.github.io/B-UtopiaTemp/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="btn2 py-2 mt-3 fs-6">
                          Read More
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row gx-0" id="portfolio_col1">
              <div className="col-md-6 col-sm-6 col-12 col-lg-4 my-4">
                <div className="s4_1">
                  <img src={img4} alt="" className="img-fluid" />
                  <div className="overlay">
                    <div className="text">
                      <h4>Alpha Hospital Template</h4>
                      <p>Completed With HTML | CSS and Bootstrap 5 </p>
                      <a
                        href="https://waleedcodes.github.io/B-HospitalTemp/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="btn2 py-2 mt-3 fs-6">
                          Read More
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-12 col-lg-4 my-4">
                <div className="s4_1">
                  <img src={img5} alt="" className="img-fluid" />
                  <div className="overlay">
                    <div className="text">
                      <h4>Ezewev Agency Tempalte</h4>
                      <p>Completed With HTML | CSS and Bootstrap 5 </p>
                      <a
                        href="https://waleedcodes.github.io/B-EvewezTemp/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="btn2 py-2 mt-3 fs-6">
                          Read More
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-12 col-lg-4 my-4">
                <div className="s4_1">
                  <img src={img6} alt="" className="img-fluid" />
                  <div className="overlay">
                    <div className="text">
                      <h4>Tech Company Template</h4>
                      <p>Completed With HTML | CSS and Bootstrap 5 </p>
                      <a
                        href="https://waleedcodes.github.io/B-WebTemp/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="btn2 py-2 mt-3 fs-6">
                          Read More
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row gx-0" id="portfolio_col2">
              <div className="col-md-6 col-sm-6 col-12 col-lg-4 my-4">
                <div className="s4_1">
                  <img src={img7} alt="" className="img-fluid" />
                  <div className="overlay">
                    <div className="text">
                      <h4>Sviss Tours Template</h4>
                      <p>Completed With HTML | CSS and Bootstrap 5 </p>
                      <a
                        href="https://waleedcodes.github.io/B-TouristsTemp/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="btn2 py-2 mt-3 fs-6">
                          Read More
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-12 col-lg-4 my-4">
                <div className="s4_1">
                  <img src={img8} alt="" className="img-fluid" />
                  <div className="overlay">
                    <div className="text">
                      <h4>Electricity Template</h4>
                      <p>Completed With HTML | CSS and Bootstrap 5 </p>
                      <a
                        href="https://waleedcodes.github.io/B-ElectricTemp/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="btn2 py-2 mt-3 fs-6">
                          Read More
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-12 col-lg-4 my-4">
                <div className="s4_1">
                  <img src={img9} alt="" className="img-fluid" />
                  <div className="overlay">
                    <div className="text">
                      <h4>Property Template</h4>
                      <p>Completed With HTML | CSS and Bootstrap 5 </p>
                      <a
                        href="https://waleedcodes.github.io/B-HouseTemp/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="btn2 py-2 mt-3 fs-6">
                          Read More
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row gx-0" id="portfolio_col3">
              <div className="col-md-6 col-sm-6 col-12 col-lg-4 my-4">
                <div className="s4_1">
                  <img src={img10} alt="" className="img-fluid" />
                  <div className="overlay">
                    <div className="text">
                      <h4>UniLend App Template</h4>
                      <p>Completed With HTML | CSS and Bootstrap 5 </p>
                      <a
                        href="https://waleedcodes.github.io/B-AppTemp/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="btn2 py-2 mt-3 fs-6">
                          Read More
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-12 col-lg-4 my-4">
                <div className="s4_1">
                  <img src={img11} alt="" className="img-fluid" />
                  <div className="overlay">
                    <div className="text">
                      <h4>Agro Farm Template</h4>
                      <p>Completed With HTML | CSS and Bootstrap 5 </p>
                      <a
                        href="https://waleedcodes.github.io/B-FurnitureTemp/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="btn2 py-2 mt-3 fs-6">
                          Read More
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center pt-4 d-flex justify-content-center">
            <button
              className="btn3 border-0 mt-3"
              id="btn3"
              onClick={handleblog}
            >
              Show More ...
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;