import React from "react";
import footerLogo from "../../assets/logo.png";
import Banner from "../../assets/website/footer-pattern.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import "./Footer.css"; 

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div className="footer" style={{ backgroundImage: `url(${Banner})`,width:"100" }}>
      <div className="footer-container">
        <div className="footer-content">
         
          <div className="footer-company">
            <h1 className="footer-logo">
              <img src={footerLogo} alt="logo" />
              Shopsy
            </h1>
            <p className="footer-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in
              beatae ea recusandae blanditiis veritatis.
            </p>
          </div>

          
          <div className="footer-links-wrapper">
            <div className="footer-links">
              <h2>Important Links</h2>
              <ul>
                {FooterLinks.map((link) => (
                  <li key={link.title}>
                    <p>{link.title}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-links">
              <h2>Links</h2>
              <ul>
                {FooterLinks.map((link) => (
                  <li key={link.title}>
                    <p>{link.title}</p>
                  </li>
                ))}
              </ul>
            </div>

            
            <div className="footer-social-contact">
              <div className="footer-social-icons">
              <FaInstagram />
                <FaFacebook />
               <FaLinkedin />
              </div>
              <div className="footer-contact">
                <div><FaLocationArrow /><span>Dehradun, Uk</span></div>
                <div><FaMobileAlt /><span>+91 123456789</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
