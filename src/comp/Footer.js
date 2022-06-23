import React from "react";
import { Link } from "react-scroll";

function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About</h5>
            <div className="bar mb-3"></div>
            <p>
            I respond quickly to all messages, 
            as I pride myself on being a good 
            communicator and a reliable person 
            to work with.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <div className="bar mb-3"></div>
            <ul className="footer-link">
              <li>
                <Link to="banner" className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="about" className="nav-link">
                  About
                </Link>
              </li>
              <li>
                <Link to="services" className="nav-link">
                  Services
                </Link>
              </li>
              <li>
                <Link to="portfolio" className="nav-link">
                  My Work
                </Link>
              </li>
              <li>
                <Link to="contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Follow ME</h5>
            <div className="bar mb-3"></div>

            <div className="f-icon">
              <a
                target="_blank"
                href="https://www.facebook.com/NeilGuibsonToloCedeno"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a target="_blank" href="https://twitter.com/">
                <i className="fab fa-twitter"> </i>
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/"
              >
                <i className="fab fa-instagram"> </i>
              </a>
              <a
                target="_blank"
                href="https://join.skype.com/invite/wiC2yzkviiVO"
              >
                <i className="fab fa-skype"> </i>
              </a>
              <a
                target="_blank"
                href="https://api.whatsapp.com/send?phone=639465669314"
              >
                <i className="fab fa-whatsapp"> </i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
