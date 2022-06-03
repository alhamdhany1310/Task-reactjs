import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import './Style/About.css';
import img from './image/img.jpg';
const About = () => {
  const { text } = useTypewriter({
    words: ['Web Developer', 'Content Creator', 'Youtuber', 'Blogger'],
    loop: 0,
  });
  return (
    <section id="bio">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="title text-center">About me</h2>
            <div className="row pb-5">
              <div className="col-md-6">
                <h3 className="pt-5">
                  I'm Hamdhany and I'm a <span>{text}</span>
                  <Cursor cursorStyle="|" />
                </h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe alias repellendus neque perspiciatis quas. Reprehenderit porro aut officiis omnis, nulla numquam adipisci sapiente minima, consequatur vero natus excepturi
                  asperiores doloribus? Fugiat, quidem sed saepe doloremque quis architecto cupiditate aspernatur quod suscipit. Magnam, ullam optio. Error ad earum beatae labore officia!
                </p>
                <a href="http://" className="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">
                  Download CV
                </a>
              </div>
              <div className="col-md-6">
                <img src={img} className="about-img" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
// class About extends React.Component {
//   render() {

//   }
// }
export default About;
