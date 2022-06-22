import React from 'react';
import '../Style/Contact.css';
class Contact extends React.Component {
  render() {
    return (
      <section id="contact" className="mb-2">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="title">Contact me</h2>
              <div className="row">
                <div className="col-md-6">
                  <h3>Get in Touch</h3>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore nemo quasi tenetur soluta cum commodi delectus corrupti aliquam optio architecto?</p>
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
                <div className="col-md-6">
                  <h3>Message me </h3>
                  <form>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="mb-3">
                          <input type="text" className="form-control" id="exampleInputNama" aria-describedby="namaHelp" placeholder="Nama" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="mb-3">
                          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Subject" />
                    </div>
                    <div className="mb-3">
                      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Your Message"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg">
                      Kirim
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </section>
    );
  }
}
export default Contact;
