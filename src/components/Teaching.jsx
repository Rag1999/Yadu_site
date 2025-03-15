import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import { Browser, chrome } from "react-bootstrap-icons";
import { Navbar, Nav, Container } from "react-bootstrap";

export const Teaching = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="teachings">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2 className="title">
                <b>Teaching</b>
              </h2>

              <div className="container-list">
                <h3 className="alignleft">Course Instructor</h3>

                <ul className="list">
                  <li>
                    <u>
                      <b>
                        <a
                          href="https://drive.google.com/file/d/1mHwLoIIEtlDo54FOXWZzpuMN6767Fqxu/view"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Course Instructor: Human Neuropsychology (PS365-D)
                          {"    "}
                        </a>
                      </b>
                    </u>
                    - A 120+ student course introducing knowledge concerning
                    human behaviour from a neuropsychological perspective.
                  </li>
                </ul>

                <br />

                <div className="twoButtons">
                  <span className="navbar-text-new">
                    <a
                      href="https://drive.google.com/file/d/1mHwLoIIEtlDo54FOXWZzpuMN6767Fqxu/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button onClick={() => console.log("connect")}>
                        Course Syllabus
                      </button>
                    </a>
                  </span>

                  <span className="navbar-text-new">
                    <a
                      href="https://drive.google.com/file/d/1Rp5m5--sJfKMTPXVoopPr05X1S3bpQFF/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button onClick={() => console.log("connect")}>
                        Sample Lecture
                      </button>
                    </a>
                  </span>
                </div>
                <br />
              </div>

              <br />

              <div className="container-list">
                <h3 className="alignleft">Teaching Assistant</h3>
                <div className="lists">
                  <ul className="list">
                    <li>
                      PSYCH 261 (Fall 2019, Winter 2020, Spring 2020) -
                      Physiological Psychology{" "}
                    </li>
                    <li>PSYCH 461 (Fall 2020) - Human Neuropsychology</li>
                    <li>PSYCH 390 (Winter 2021) – Research in Memory</li>
                    <li>
                      HRM 200 (Spring 2021) – Basic Human Resource Management
                    </li>
                    <li>PSYCH 261 (Fall 2021) - Physiological Psychology </li>
                    <li>
                      HRM 200 (Winter 2022) – Basic Human Resource Management
                    </li>
                  </ul>

                  <ul className="list_two">
                    <li>
                      HRM 300 (Fall 2022) - Strategic Human Resources Management
                    </li>
                    <li>PSYCH 292 (Winter 2023) - Basic Data Analysis</li>
                    <li>PSYCH 211 (Spring 2023) - Developmental Psychology</li>
                    <li>PSYCH 292 (Fall 2023) - Basic Data Analysis</li>
                    <li>PSYCH 390 (Winter 2024) – Research in Memory</li>
                    <li>PSYCH 101 (Fall 2024) - Introductory Psychology</li>
                  </ul>
                </div>
              </div>

              <div className="container-list">
                <h3 className="alignleft">
                  Graduate Education Developer – Centre for Teaching Excellence
                </h3>

                <h9 className="alignleftSub">
                  <i>University of Waterloo (March 2025 – present)</i>
                </h9>
                <br />
                <div className="lists">
                  <ul className="list">
                    <li>Conduct teaching observations</li>
                    <li>
                      Facilitate advanced workshops on university teaching
                    </li>
                    <li>Assist with the development of new workshops</li>
                    <li>
                      Facilitate microteaching sessions—small-group practice
                      teaching sessions—for graduate students
                    </li>
                  </ul>
                </div>
              </div>

              {/* <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.<br></br> Lorem Ipsum has been the industry's standard
                dummy text.
              </p> */}
              {/* <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Brand Identity</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Logo Design</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Web Development</h5>
                </div>
              </Carousel> */}
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
