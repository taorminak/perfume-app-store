import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const footerLinks = [
  ['Home', 'About', 'Portfolio'],
  ['Industries', 'References', 'Partnerships'],
  ['Careers', 'Locations', 'Imprint'],
  [],
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <NavLink to="/">
          <img
            className="footer__logo"
            src="./src/resources/images/logo_netconomy_neu_weisz.png"
            alt="netconomy logo"
          />
        </NavLink>
        <hr className="footer__separator" />
        <div className="footer__columns">
          {footerLinks.map((columnItems, index) => (
            <div key={index} className="footer__column">
              {columnItems.map((item, idx) => (
                <div key={idx}>{item}</div>
              ))}
            </div>
          ))}
        </div>
        <div className="footer__connections">
          <div className="footer__copyright">&copy; 2021 NETCONOMY</div>
          <div className="footer__icons">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="footer__icon" icon={faFacebook} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="footer__icon" icon={faLinkedin} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="footer__icon" icon={faTwitter} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="footer__icon" icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
