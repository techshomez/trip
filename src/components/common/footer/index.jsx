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
                <FaFacebook />
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
            <h2>Payment Methods</h2>
            <div className="footer-link">
              <Link to="">Investor Relations</Link>
              <Link to="">Trip.com Rewards</Link>
              <Link to="">Affiliate Program</Link>
              <Link to="">List My Hotel</Link>
              <Link to="">All Hotels</Link>
              <Link to="">Become a Supplier</Link>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Footer;
