import React, { useState } from 'react';
import '../Styling/Style/Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = ({ value, onChange }) => {
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
              <Link to="/" className="nav-link">
                <i className="fa-solid fa-house"> </i> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/form" className="nav-link">
                Form
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="https://" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Blog
              </a>
              <ul className="dropdown-menu bg-primary" aria-labelledby="navbarDropdown">
                <li>
                  <Link to="/hook" className="dropdown-item">
                    Anime
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link to="/portalnews" className="dropdown-item">
                    Berita
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/redux" className="nav-link">
                Redux
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.youtube.com" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fa-solid fa-magnifying-glass"></i> Search
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <form className="d-flex" role="search">
                    <input name="search" value={value} onChange={onChange} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  </form>
                </li>
              </ul>
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
