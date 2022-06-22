import React from 'react';
import Navbar from '../Component/Navbar';
import Jumbotron from './Pages/Jumbotron';
import About from './Pages/About';
import Skill from './Pages/Skill';
import Portofolio from './Pages/Portofolio';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer';
// import Sass from './Myportofolio/scss';
export default class Styling extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <About />
        <Skill />
        <Portofolio />
        <Contact />
        <Footer />
        {/* <Sass /> */}
      </div>
    );
  }
}
