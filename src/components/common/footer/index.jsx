import { Link } from "react-router-dom";
import "./footer.css";
import {
  FaFacebook,
  FaFacebookF,
  FaFacebookSquare,
  FaInstagram,
  FaSearch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <hr />
        <div className="container">
          <div className="footer-items">
            <h2>Contact Us</h2>
            <div className="footer-link">
              <Link to="">Customer Support</Link>
              <Link to="">Service Guarantee</Link>
              <Link to="">Website Feedback</Link>
            </div>
            <div className="social-link">
              <i>
                <FaFacebookF />
              </i>
              <i>
                <FaInstagram />
              </i>
              <i>
                <FaTwitter />
              </i>
              <i>
                <FaYoutube />
              </i>
            </div>
          </div>
          <div className="footer-items">
            <h2>About</h2>
            <div className="footer-link">
              <Link to="">About Trip.com</Link>
              <Link to="">News</Link>
              <Link to="">Careers</Link>
              <Link to="">Terms & Conditions</Link>
              <Link to="">Privacy Statement</Link>
              <Link to="">About Trip.com Group</Link>
            </div>
          </div>
          <div className="footer-items">
            <h2>Other Services</h2>
            <div className="footer-link">
              <Link to="">Investor Relations</Link>
              <Link to="">Trip.com Rewards</Link>
              <Link to="">Affiliate Program</Link>
              <Link to="">List My Hotel</Link>
              <Link to="">All Hotels</Link>
              <Link to="">Become a Supplier</Link>
            </div>
          </div>
          <div className="footer-items">
            <h2 className="">Payment Methods</h2>
            <div className="footer-img">
              <img src="/assets/visa.png" alt="" />
              <img src="/assets/master-card.png" alt="" />
              <img src="/assets/paypal.png" alt="" />
              <img src="/assets/apple-pay.png" alt="" />
              <img src="/assets/google-pay.png" alt="" />
            </div>
            <div className="partners">
              <h2>Our Partners</h2>
              <div className="partner_list">
                <img src="assets/google.png" alt="" />
                <img src="assets/tripadvisor.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer-middle">
          <div className="container">
            <div className="middle-items">
              <img src="assets/cc-2022.png" alt="" />
              <span>Contact Center of the year 2022</span>
            </div>
            <div className="middle-items">
              <img src="assets/googledesign.jpeg" alt="" />
              <span>Google Material Design Awards 2019</span>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer-bottom">
          <article>
            Copyright © 2023 Trip.com Travel Singapore Pte. Ltd. All rights
            reserved
            <br /> Site Operator: Trip.com Travel Singapore Pte. Ltd.
          </article>
        </div>
      </div>
    </>
  );
};

export default Footer;
