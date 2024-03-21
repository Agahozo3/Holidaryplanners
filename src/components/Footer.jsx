import React from "react";
import paymentCo from "../../public/Images/payment-companies-logo.png";
import whiteLogo from "../../public/Images/white-logo.png";
import footerBgImg from "../../public/Images/footer-back.jpg";
import {
  FaFacebookF,
  FaTwitter,
  FaPhoneAlt,
  FaInstagram,
} from "react-icons/fa";
import './Footer.css'


function Footer() {
  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, .9), rgba(0, 0, 0, .95)), url(${footerBgImg})`, // Linear gradient overlay + image
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };
  return (
    <footer className="footer" style={backgroundStyle}>
      <div className="footer-container">
        <div className="row footer-header">
          <div className="three-col footer-co-info">
            <div className="footer-row">
              <div className="footer-logo">
                <a href="/">
                  <img src={whiteLogo} alt="Logo" />
                </a>
              </div>
              <div className="footer-text">
                <p>
                  <b>Holiday Planners</b> sit amet consectetur adipisicing elit.
                  Perferendis sapiente tenetur officiis explicabo fugit, sit
                  mollitia eum atque excepturi quaerat autem.
                </p>
              </div>
              <div className="newsletter-form">
                <form>
                  <span className="input-box email-wrap">
                    <input
                      type="email"
                      className="form-input"
                      placeholder="Enter Your Email"
                      required
                    />
                    <button type="submit" className="sec-btn">
                      <span>Submit</span>
                    </button>
                  </span>
                </form>
              </div>
              <div className="payment-companies-logo">
                <img src={paymentCo} alt="Payment" />
              </div>
            </div>
          </div>
          <div className="three-col footer-link-col">
            <div className="footer-row footer-nav">
              <div className="footer-title">
                <div className="h3-title">Navigation</div>
              </div>
              <div className="footer-menu">
                <ul>
                  <li>
                    <a href="/"> Home</a>
                  </li>
                  <li>
                    <a href="/About"> About</a>
                  </li>
                  <li>
                    <a href="/Destination"> Destination</a>
                  </li>
                  <li>
                    <a href="/Tour"> Tour</a>
                  </li>
                  <li>
                    <a href="/Blog"> Blog</a>
                  </li>
                  <li>
                    <a href="/contact"> Contact us</a>
                  </li>
                  <li>
                    <a href="/login"> Login</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="three-col footer-contact-col">
            <div className="footer-row footer-contact-wp">
              <div className="footer-title">
                <div className="h3-title">Need Help?</div>
              </div>
              <div className="footer-contact">
                <ul>
                  <li>
                    <span className="contact-label">Call Us</span>
                    <a href="tel:1234567890">+123 456 7890</a>
                  </li>
                  <li>
                    <span className="contact-label">Email for Us</span>
                    <a href="mailto:holidayplanners@gmail.com">
                      holidayplanners@gmail.com
                    </a>
                  </li>
                  <li>
                    <span className="contact-label">Location</span>
                    <a href="/">Main Street, Kigali - RW</a>
                  </li>
                  <li className="social-icons">
                    <span className="contact-label">Follow Us</span>
                    <ul>
                      <li>
                        <a href="https://fb.com">
                          <span className="icon">
                            <FaFacebookF />
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="https://instagram.com">
                          <span className="icon">
                            <FaInstagram />
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com">
                          <span className="icon">
                            <FaTwitter />
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer-bottom">
          <div className="row">
            <div className="two-col copyright">
              <p className="copyright-text">
                Copyright &copy; 2023{" "}
                <a href="https://instagram.com/iwmvictor">Iwmvictor</a>. All
                Rights Reserved.
              </p>
            </div>
            <div className="two-col copyright-link">
              <ul>
                <li>
                  <a href="/">Privacy Policy</a>
                </li>
                <li className="side-border">
                  <a href="/">Terms of Use</a>
                </li>
                <li>
                  <a href="/">Cookie Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer