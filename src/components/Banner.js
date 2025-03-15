import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/yalu3.JPG";
import {  Download } from 'react-bootstrap-icons';
//import { HashLink } from "react-router-hash-link";
//import TrackVisibility from 'react-on-screen';


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "PhD Candidate", "Stupid", "Little bitch" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">

        <Col xs={12} md={6} xl={5}>
          
             
          <div className={"animate__animated animate__zoomIn" }>
            <img src={headerImg} alt="Header Img"/>
          </div>

    </Col>
          <Col xs={12} md={6} xl={7}>
       
            
              <div className="animate__animated animate__fadeIn" >
                {/* <span className="tagline">Welcome to my Portfolio</span> */}
                
                <h1>{`Yadurshana Sivashankar,`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{"PhD"}</span></span></h1>
                 <p><b>I am a doctoral researcher at the University of Waterloo in the Department of Cognitive Neuroscience. My research examines cognitive and neural mechanisms that benefit spatial memory and navigation across age groups. I use virtual reality, driving simulators, and fMRI technology. I also investigate memory changes due to aging, stroke, and neurodegenerative diseases.</b></p>
                 <p><b>Research Interests: </b>Spatial Memory, Aging, Neurodegenerative Diseases, Human Memory, Curiosity-driven Learning and Virtual Reality.</p>

 
                {/* <a href="https://drive.google.com/file/d/1pq9RW2a-v6gDTr8_x9WtyMMxRcRREHQN/view"
                 target="_blank"
                 rel="noopener noreferrer">
                <button  onClick={() => console.log('connect')}>Resume<Download size={25} /></button>
          
                
                </a> */}

                <a href="https://drive.google.com/file/d/15KyKccK8ipzIkpbthZbDPMNo2T6x3LwG/view?usp=sharing"
                 target="_blank"
                 rel="noopener noreferrer">
                <button  className="resume" onClick={() => console.log('connect')}>CV <Download size={25} /></button>
         
                </a>

                  
              </div>
         
          </Col>
      
      
            
       
        </Row>
      </Container>
    </section>
  )
}
