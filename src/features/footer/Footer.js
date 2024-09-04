import React from 'react';
import "./assets/Footer.css"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <LogoSection />
        <LinksSection />
        <ContactSection />
      </div>
      <div className="footer-bottom">
        <span>© 2024 All Rights Reserved.</span>
        <div className="footer-navigation">
          <button className="nav-button">❮</button>
          <button className="nav-button">❯</button>
        </div>
      </div>
    </footer>
  );
};

const LogoSection = () => (
  <div className="logo-section">
    <h2 className="logo">Second Half</h2>
    <SocialLinks />
  </div>
);

const LinksSection = () => (
  <div className="links-section">
    <div className="column">
      <h3>Company</h3>
      <ul>
        <li>Homepage</li>
        <li>What We Do</li>
        <li>Who We Are</li>
        <li>Insights</li>
        <li>Careers</li>
      </ul>
    </div>
    <div className="column">
      <h3>Services</h3>
      <ul>
        <li>Video production/photography</li>
        <li>Digital Marketing</li>
        <li>Development of Website & Mobile App</li>
        <li>Online Stores</li>
        <li>SEO</li>
        <li>Graphic Design</li>
      </ul>
    </div>
  </div>
);

const ContactSection = () => (
  <div className="contact-section">
    <h3>Contacts us</h3>
    <ul>
      <li>Business Partnerships, Inquiries: <Link to="mailto:inquiries@Loremipsum.com">inquiries@Loremipsum.com</Link></li>
      <li>Marketing & PR: <Link to="mailto:marketing@Loremipsum.com">marketing@Loremipsum.com</Link></li>
      <li>Human Resources, Job applications: <Link to="mailto:hr@Loremipsum.com">hr@Loremipsum.com</Link></li>
      <li>Office Management: <Link to="mailto:Contact@Loremipsum.com">Contact@Loremipsum.com</Link></li>
    </ul>
    <AppStoreLinks />
  </div>
);

const SocialLinks = () => (
  <div className="social-links">
    <h3>Follow Us</h3>
    <div className="icons">
      <Link to="#"><FontAwesomeIcon icon="fa-brands fa-linkedin" beatFade />linkedin</Link>
      <Link to="#"><i className="fab fa-facebook"></i></Link>
      <Link to="#"><i className="fab fa-instagram"></i></Link>
      <Link to="#"><i className="fab fa-snapchat"></i></Link>
    </div>
  </div>
);

const AppStoreLinks = () => (
  <div className="app-store-links">
    <Link to="#">
      <img src="appstore.png" alt="Download on the App Store" />
    </Link>
    <Link to="#">
      <img src="googleplay.png" alt="Get it on Google Play" />
    </Link>
  </div>
);

export default Footer;
