import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { HashLink } from "react-router-hash-link";

import navIcon0 from "../assets/img/arrow-up-right-square.svg";

export const Publications = () => {
  return (
    <section className="publications" id="publications">
      <div>
        <div class="section-heading col-12 mb-3 text-center">
          <h1 class="mb-0">Publications</h1>
        </div>

        <div className="pub-container-card">
          <div className="pub-text-box">
            <p>
              Sivashankar, Y., Roberts, B.R.T., & Fernandes, M.A. (2025).
              Integration of representations is key to the enactment benefit:
              Insights from individuals with stroke lesions.{" "}
              <i>Neuropsychologia, 211 </i>(10911), 1-11.
            </p>

            <span className="navbar-text">
              <a
                href="https://doi.org/10.1016/j.neuropsychologia.2025.109118"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button onClick={() => console.log("connect")}>Read</button>
              </a>
            </span>
          </div>
        </div>

        <div className="pub-container-card">
          <div className="pub-text-box">
            <p>
              Sivashankar, Y., He, P., Sauz ́eon, H., & Fernandes, M.A. (2024).
              The benefit of motoric engagement at encoding on route memory.{" "}
              <i>Spatial Cognition and Computation, 24</i> (4), 271-296.
            </p>

            <span className="navbar-text">
              <a
                href="https://www.tandfonline.com/doi/full/10.1080/13875868.2024.2359929"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button onClick={() => console.log("connect")}>Read</button>
              </a>
            </span>
          </div>
        </div>

        <div className="pub-container-card">
          <div className="pub-text-box">
            <p>
              Sivashankar, Y., Fernandes, M. A., Oudeyer, P. Y., &amp; Sauzéon,
              H. (2024). The beneficial role of curiosity on route memory in
              children. <i>Frontiers in Cognition: Learning and Development</i>,
              3, 1-30.
            </p>

            <span className="navbar-text">
              <a
                href="https://www.frontiersin.org/journals/cognition/articles/10.3389/fcogn.2024.1346280/full"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button onClick={() => console.log("connect")}>Read</button>
              </a>
            </span>
          </div>
        </div>

        <div className="pub-container-card">
          <div className="pub-text-box">
            <p>
              Sivashankar, Y., &amp; Chen, Z. (2023). Examining the influence of
              substance use on mental health rating during COVID-19: A Canadian
              perspective. <i>Frontiers in Epidemiology</i>, 3, 1-25.
            </p>
            <span className="navbar-text">
              <a
                href="https://www.frontiersin.org/journals/epidemiology/articles/10.3389/fepid.2023.1067492/full"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button onClick={() => console.log("connect")}>Read</button>
              </a>
            </span>
          </div>
        </div>

        <div className="pub-container-card">
          <div className="pub-text-box">
            <p>
              Sivashankar, Y., Liu, J., &amp; Fernandes, M. A. (2023). The
              importance of performing versus observing meaningful actions, on
              the enactment benefit to memory.{" "}
              <i>Journal of Cognitive Psychology 35</i>(1), 47-58.
            </p>
            <span className="navbar-text">
              <a
                href="https://www.tandfonline.com/doi/full/10.1080/20445911.2022.2102639"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button onClick={() => console.log("connect")}>Read</button>
              </a>
            </span>
          </div>
        </div>

        <div className="pub-container-card">
          <div className="pub-text-box">
            <p>
              Sivashankar, Y., &amp; Fernandes, M. A. (2021). Enhancing memory
              using enactment: Does meaning matter in action production?{" "}
              <i>Memory, 30</i>(2), 147-160.
            </p>
            <span className="navbar-text">
              <a
                href="https://www.tandfonline.com/doi/full/10.1080/09658211.2021.1995877"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button onClick={() => console.log("connect")}>Read</button>
              </a>
            </span>
          </div>
        </div>

        <div className="pub-container-card">
          <div className="pub-text-box">
            <p>
              Fiocco, A. J., Millet, G., D’Amico, D., Krieger, L., Sivashankar,
              Y., Lee, Seung. H., &amp; Lachman, R. (2021). Virtual tourism for
              older adults living in residential care: A mixed-methods study.
              <i>PLOS One, 16</i>(5), 1-15.
            </p>
            <span className="navbar-text">
              <a
                href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0250761"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button onClick={() => console.log("connect")}>Read</button>
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
