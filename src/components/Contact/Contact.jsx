import React from "react";
import "boxicons";
import "./Contact.css";
import { Button, message } from "antd";
const Contact = () => {
  //   const navigate = useNavigate();

  //   function click() {
  //     navigate("/");
  //     setTimeout(() => {
  //       message.success("Сообщение отправлено!");
  //     }, 500);
  //   }
  return (
    <div>
      <section className="contact">
        <div className="content">
          <h2>Contact Us</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="container">
          <div className="contactInfo">
            <div className="box">
              <div className="icon">
                <box-icon type="solid" name="map"></box-icon>
              </div>
              <div className="text">
                <h3>Address</h3>
                <p>3234 Gagarin Bishkek Kyrgyzstan,422323</p>
              </div>
            </div>

            <div className="box">
              <div className="icon">
                <box-icon type="solid" name="phone"></box-icon>
              </div>
              <div className="text">
                <h3>Phone</h3>
                <p>0557777777</p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <box-icon type="solid" name="envelope"></box-icon>{" "}
              </div>
              <div className="text">
                <h3>Email</h3>
                <p>kyrgyzbuy@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="contactForm">
            <form action="">
              <h2 style={{ color: "white" }}>Send Message</h2>
              <div className="inputBox">
                <input
                  type="text"
                  required="required"
                  placeholder="Full Name"
                />
              </div>
              <div className="inputBox">
                <input type="text" required="required" placeholder="Email" />
              </div>
              <div className="inputBox">
                <textarea required="required"></textarea>
                <span style={{ color: "white" }}>Type your Massege... </span>
              </div>
              <div>
                <a href="" class="floating-button">
                  <strong>Send</strong>
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
