import React from 'react';
import Jumbotron from './Myportofolio/Jumbotron';
import Navbar from './Myportofolio/Navbar';
import About from './Myportofolio/About';
import Skill from './Myportofolio/Skill';
import Portofolio from './Myportofolio/Portofolio';
import Contact from './Myportofolio/Contact';
import Footer from './Myportofolio/Footer';
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
