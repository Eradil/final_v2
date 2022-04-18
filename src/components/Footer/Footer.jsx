import React from "react";
import "boxicons";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      {/* <footer>
        <div className="footer-content">
          <h2 style={{ color: "white", margin: "0 auto" }}>code opacity</h2>
          <p style={{ width: "80vw", margin: "0 auto" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            aperiam quidem
          </p>
          <div className="icon">
            {" "}
            <ul className="social">
              <li>
                <a href="#" className="social-icon">
                  <box-icon type="logo" name="instagram"></box-icon>
                </a>
              </li>
              <li>
                <a href="#" className="social-icon">
                  <box-icon type="logo" name="facebook-square"></box-icon>
                </a>
              </li>
              <li>
                <a href="#" className="social-icon">
                  <box-icon type="logo" name="twitter"></box-icon>
                </a>
              </li>
              <li>
                <a href="#" className="social-icon">
                  <box-icon name="telegram" type="logo"></box-icon>
                </a>
              </li>
              <li>
                <a href="#" className="social-icon">
                  <box-icon name="whatsapp" type="logo"></box-icon>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h1 style={{ color: "white", margin: " 15px 40px auto 50px" }}>
              KyrgyzBuy
            </h1>
          </div>

          <div class="column links">
            <h3 className="footer-col" style={{ color: "white" }}>
              Some Links
            </h3>

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
            <h3 className="footer-col" style={{ color: "white" }}>
              Some Links
            </h3>

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
            <h3 className="footer-col" style={{ color: "white" }}>
              Some Links
            </h3>

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
            <h3 className="footer-col" style={{ color: "white" }}>
              Some Links
            </h3>

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
        </div>

        <div className="footer-bottom">
          <p style={{ margin: "0 auto" }}>
            copyright &copy;2022 codeOpacity. designed by <span>ulan</span>{" "}
          </p>
        </div>
      </footer> */}
      <footer class="footer">
        <div class="l-footer">
          <h1>
            <img src="https://i.postimg.cc/y62wcLBq/logo.png" alt="" />
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
            atque recusandae in sit sunt molestiae aliquid fugit. Mollitia eaque
            tempore iure sit nobis? Vitae nemo, optio maiores numquam quis
            recusandae.
          </p>
        </div>
        <ul class="r-footer">
          <li>
            <h2 style={{ color: "white" }}>Social</h2>
            <ul class="box">
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Pinterest</a>
              </li>
              <li>
                <a href="#">Dribbble</a>
              </li>
            </ul>
          </li>
          <li class="features">
            <h2 style={{ color: "white" }}>Information</h2>
            <ul class="box h-box">
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Sales</a>
              </li>
              <li>
                <a href="#">Tickets</a>
              </li>
              <li>
                <a href="#">Certifications</a>
              </li>
              <li>
                <a href="#">Customer Service</a>
              </li>
            </ul>
          </li>
          <li>
            <h2 style={{ color: "white" }}>Legal</h2>

            <ul class="box">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">Contract</a>
              </li>
            </ul>
          </li>
        </ul>
        <div class="b-footer">
          <p>All rights reserved by ©CompanyName 2020 </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
