import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import './Style/Jumbotron.css';
const Jumbotron = () => {
  const { text } = useTypewriter({
    words: ['Web Developer', 'Content Creator', 'Youtuber', 'Blogger'],
    loop: 0,
  });
  return (
    <section id="home">
      <div className="home">
        <div className="jumbotron ">
          <div className="container">
            <div className="row text-start">
              <div className="col-md-12">
                <h2>Haloo, My Name Is</h2>
                <h1>Maspuk Al Hamdani</h1>
                <h2>
                  And I'm {text} <Cursor cursorStyle="_" />
                </h2>
                <div className="icon-btn1">
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    <div className="icon-3" id="icon">
                      <i className="fab fa-linkedin-in"></i>
                    </div>
                  </a>
                  <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <div className="icon-4" id="icon">
                      <i className="fab fa-instagram"></i>
                    </div>
                  </a>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    <div className="icon-6" id="icon">
                      <i className="fa-brands fa-youtube"></i>
                    </div>
                  </a>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    <div className="icon-7" id="icon">
                      <i className="fa-brands fa-github"></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <img src={img} alt="My Profil" className="rounded-circle img-thumbnail mt-5" /> */}
        </div>
      </div>
    </section>
  );
};
// class Jumbotron extends React.Component {
//   render() {

//   }
// }
export default Jumbotron;
