import React from "react";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  WhatsAppOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-main">
      <footer>
        <div class="row primary">
          <div class="column about">
            <h3>KyrgyzBUY</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              voluptatem corporis error non,
            </p>

            <div className="social">
              <InstagramOutlined className="social-icon" />
              <FacebookOutlined className="social-icon" />
              <TwitterOutlined className="social-icon" />
              <YoutubeOutlined className="social-icon" />
              <WhatsAppOutlined className="social-icon" />
            </div>
          </div>

          <div class="column links">
            <h3 className="footer-col">Some Links</h3>

            <ul className="list">
              <li>
                <a href="#faq" className="link">
                  F.A.Q
                </a>
              </li>
              <li>
                <a href="#cookies-policy" className="link">
                  Cookies Policy
                </a>
              </li>
              <li>
                <a href="#terms-of-services" className="link">
                  Terms Of Service
                </a>
              </li>
              <li>
                <a href="#support" className="link">
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div class="column links">
            <h3 className="footer-col">Some Links</h3>
            <ul className="list">
              <li>
                <a href="#faq" className="link">
                  F.A.Q
                </a>
              </li>
              <li>
                <a href="#cookies-policy" className="link">
                  Cookies Policy
                </a>
              </li>
              <li>
                <a href="#terms-of-services" className="link">
                  Terms Of Service
                </a>
              </li>
              <li>
                <a href="#support" className="link">
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div class="column subscribe">
            <h3 style={{ borderBottom: "#e91e63 2px solid", width: "125px" }}>
              Newsletter
            </h3>
            <div>
              <input type="email" placeholder="Your email id here" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>

        <div class="row copyright">
          <div class="footer-menu">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Contact</a>
            <a href="">Blog</a>
            <a href="">Social</a>
          </div>
          <p>Copyright &copy; 2022 Frontend Developer</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
