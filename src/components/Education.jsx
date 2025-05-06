import comp1 from "../assets/img/University_of_Waterloo_seal.svg.png";
import comp2 from "../assets/img/flipkart.png";
import comp3 from "../assets/img/toyota.png";
import comp4 from "../assets/img/UofT Logo_bborder.png";
import colorSharp from "../assets/img/color-sharp2.png";

export const Education = () => {
  return (
    <section className="education" id="educations">
      <div>
        <div class="section-heading col-12 mb-3 text-center">
          <h1 class="mb-0">Education</h1>
        </div>

        <div className="timeline">
          <div className="container-card left-container">
            <img src={comp1} alt="Logo" />
            <div className="text-box">
              <h2>University of Waterloo</h2>
              <small>
                <i>Sept 2021 – Present</i>
              </small>
              <p>
                <b>PhD in Cognitive Neuroscience</b>
              </p>
              <span className="left-container-arrow"></span>
            </div>
          </div>

          <div className="container-card right-container">
            <img src={comp1} alt="Logo" />
            <div className="text-box">
              <h2>University of Waterloo</h2>
              <small>
                <i>Sept 2019 – Aug 2021</i>
              </small>
              <p>
                <b>Master of Arts</b>
              </p>
              <span className="right-container-arrow"></span>
            </div>
          </div>

          <div className="container-card left-container">
            <img src={comp4} alt="Logo" />
            <div className="text-box">
              <h2>University of Toronto</h2>
              <small>
                <i>Sept 2014 – Apr 2018</i>
              </small>
              <p>
                <b>Bachelor of Science – Mental Health Studies, Honours</b>
              </p>
              <span className="left-container-arrow"></span>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image" src={colorSharp} alt="Image" />
    </section>
  );
};

export default Education;
