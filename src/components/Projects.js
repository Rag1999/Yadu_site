import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import aging from "../assets/img/logoimages/Aging.jpg";
import encoding from "../assets/img/logoimages/Encoding Strategy.jpg";
import mentalHealth from "../assets/img/logoimages/Mental Health.jpg";
import navigation from "../assets/img/logoimages/navigation.jpg";
import patient from "../assets/img/logoimages/Patient.jpg";

import drive from "../assets/img/logoimages/driving.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png"

import { Link} from 'react-bootstrap-icons';
//import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Aging",
      description: "In this collaboration, we examined the effects of VR tourism exposure on indices of psycho social wellbeing among older adults living in residential care. Findings suggest that immersive VR tourism may be a viable program for older adults in residential care.",
      imgUrl: aging,
      link:"https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0250761"
    },
    {
      title: "Encoding Strategies to Enhance Memory",
      description: "Do actions speak louder than words? Our research indicates that performing actions related to the information to be remembered enhances memory more effectively than passive reading.",
      imgUrl: encoding,
      link:"https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0250761"
    },
    {
      title: "Mental Health",
      description: "In this collaboration, we showed the adverse influence of substance use on self-reported mental health ratings during COVID-19, and highlighted a critical sex difference in the way social correlates of well-being (life satisfaction and social confidants) moderated this relationship.",
      imgUrl: mentalHealth,
      link:"https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0250761"
    },
    {
      title: "Spatial Navigation Across the Lifespan",
      description: "This program of research evaluates spatial memory performance under distinct types of exploration—such as being guided by Google Maps directions, actively deciding on a route, or passively observing a route—to determine the impact of SIRI-guided navigation on spatial memory.",
      imgUrl: navigation,
      link:"https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0250761"
    },
    {
      title: "Patient Research",
      description: "We examined the brain basis of the enactment effect in stroke patients who have sustained focal lesions to frontal or parietal areas of the brain. ",
      imgUrl: patient,
      link:"https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0250761"
    },

    {
      title: "Influence of multitasking while driving on spatial memory",
      description: "We examined how multi-tasking while driving impacts situational awareness (measured by landmark recognition) and the spatial knowledge (measured by a sketch map drawn of the explored environment) of a driver.",
      imgUrl: patient,
      link:"https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0250761"
    }
   
   
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2 >Projects</h2>
                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav> */}
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {/* {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                          
                        } */}


                             <Col size={12} sm={6} md={4}>


                              <div className="proj-imgbx">
                                
                                <img src={aging} />

                                <div className="proj-txtx">
                                  <h4>{projects[0].title}</h4>
                                  <span>{projects[0].description}</span>
                                  <br/>
                       

                                  <a className="" href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0250761"
                                      target="_blank"
                                      rel="noopener noreferrer">
                                      <button  className="resume" onClick={() => console.log('connect')}><Link size={25} /> VR tourism in older adults</button>
                              
                                   </a>
                                </div>

                              </div>
                              
       
   
                            </Col>

                            <Col size={12} sm={6} md={4}>


                              <div className="proj-imgbx">

                              <img src={encoding} />

                              <div className="proj-txtx">
                                <h4>{projects[1].title}</h4>
                                <span>{projects[1].description}</span>

                                <a href="https://www.tandfonline.com/doi/full/10.1080/09658211.2021.1995877"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <button  className="resume" onClick={() => console.log('connect')}><Link size={25} /> Does meaning drive the enactment effect? </button>

                                </a>

                                <a href="https://www.tandfonline.com/doi/full/10.1080/20445911.2022.2102639"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <button  className="resume" onClick={() => console.log('connect')}><Link size={25} /> Performer vs. Observer of Actions</button>

                                </a>
                               

                           

                            
                              </div>

                         


                              </div>

                        



                            </Col>

                            <Col size={12} sm={6} md={4}>


                                <div className="proj-imgbx">

                                <img src={mentalHealth} />

                                <div className="proj-txtx">
                                  <h4>{projects[2].title}</h4>
                                  <span>{projects[2].description}</span>

                                  <a href="https://www.frontiersin.org/journals/epidemiology/articles/10.3389/fepid.2023.1067492/full"
                                      target="_blank"
                                      rel="noopener noreferrer">
                                      <button  className="resume" onClick={() => console.log('connect')}><Link size={25} /> Influence of substance use on mental health </button>

                                  </a>

                               
                                




                                </div>




                                </div>





                            </Col>



                            <Col size={12} sm={6} md={4}>


                                <div className="proj-imgbx">

                                <img src={navigation} />

                                <div className="proj-txtx">
                                  <h4>{projects[3].title}</h4>
                                  <span>{projects[3].description}</span>
                                  

                                  <a href="https://www.tandfonline.com/doi/full/10.1080/13875868.2024.2359929"
                                      target="_blank"
                                      rel="noopener noreferrer">
                                      <button  className="resume" onClick={() => console.log('connect')}><Link size={25} /> GPS use on route memory</button>

                                  </a>

                                  <a href="https://www.frontiersin.org/journals/cognition/articles/10.3389/fcogn.2024.1346280/full"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <button  className="resume" onClick={() => console.log('connect')}><Link size={25} /> Curiosity driven spatial learning </button>

                                </a>

                               
                                




                                </div>




                                </div>





                            </Col>


                                <Col size={12} sm={6} md={4}>


                                <div className="proj-imgbx">

                                <img src={patient} />

                                <div className="proj-txtx">
                                  <h4>{projects[4].title}</h4>
                                  <span>{projects[4].description}</span>

                                  <a href="https://doi.org/10.1016/j.neuropsychologia.2025.109118"
                                      target="_blank"
                                      rel="noopener noreferrer">
                                      <button  className="resume" onClick={() => console.log('connect')}><Link size={25} /> Enactment effect in stroke patients </button>

                                  </a>

                               
                                




                                </div>




                                </div>





                            </Col>




                            <Col size={12} sm={6} md={4}>


                                    <div className="proj-imgbx">

                                    <img src={drive} />

                                    <div className="proj-txtx">
                                      <h4>{projects[5].title}</h4>
                                      <span>{projects[5].description}</span>

                                      <br/>

                                      <a href="https://drive.google.com/file/d/13_ti5ifzDC5q92WR--QIigLWGmF9BVRZ/view?usp=sharing"
                                          target="_blank"
                                          rel="noopener noreferrer">
                                          <button  className="resume" onClick={() => console.log('connect')}><Link size={25} /> Link to poster </button>

                                      </a>
                                  

                                      <a href="https://drive.google.com/file/d/1XSC9t43_o4oXN4KZFEK5p1raC8OCgyPT/view"
                                          target="_blank"
                                          rel="noopener noreferrer">
                                          <button  className="resume" onClick={() => console.log('connect')}><Link size={25} /> Participants' view during driving  </button>

                                      </a>







                                    </div>




                                    </div>





                             </Col>



                           

                            

                            
                                                          
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
