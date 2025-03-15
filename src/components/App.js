//import logo from '../logo.svg';
import './App.css';
//import Home from './Home';
import Navbar from './NavBar';
//import Cover from './Cover';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './Banner';
import Education from './Education';
import { Publications } from './Publication';
import { Teaching } from './Teaching';
import { Contact } from './Contact';
import { Projects } from './Projects';



function App() {
  return (
    <div className="App">

      <Navbar />
      <Banner />

      <Education />
      <Teaching />
      <Publications />
       <Projects /> 
      <Contact />

 


    

    </div>
  );
}

export default App;
