import React, { useState } from 'react';
import './Style/Navbar.css';
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const ubahBg = () => {
    if (window.scrollY >= 90) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener('scroll', ubahBg);
  return (
    <nav className={navbar ? 'navbar sticky navbar-expand-lg shadow-sm fixed-top' : 'navbar  navbar-expand-lg fixed-top'}>
      <div className="container">
        <a className="navbar-brand" href="https://www.youtube.com">
          Al <span>Hamdhany</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon">
            <i className="fas fa-bars"></i>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#home">
                <i className="fa-solid fa-house"> </i> Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#bio">
                <i className="fa-solid fa-user"> </i> About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skill">
                <i className="fa-solid fa-pen-nib"> </i> Skill
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portofolio">
                <i className="fa-solid fa-user-check"> </i> Portofolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                <i className="fa-solid fa-address-card"> </i> Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
// class Navbar extends React.Component {
//   render() {

// }
export default Navbar;
