import { Link } from "react-router-dom";
import { FaMapMarker, FaSistrix } from "react-icons/fa";
import "./header.css";
import Banner from "../../home/banner";
import { useState } from "react";

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  return (
    <div className="header">
      <div className="container">
        <div className="nav_top_left">
          <Link to="/" className="logo">
            <img src="/assets/logo.svg" alt="" />
          </Link>
          <div className="nav_search">
            <input
              type="text"
              onClick={() => setSearchOpen(!searchOpen)}
              placeholder="Destination, attraction, hotel, etc"
            />
            <button>
              <i>
                <FaSistrix />
              </i>
            </button>
            {searchOpen && (
              <div className="header_search_option">
                <div className="search_title">Popular Destinations</div>
                <div className="search_items">
                  <div className="items">
                    <i>
                      <FaMapMarker />
                    </i>
                    <span>Bangkok</span>
                    <p>Thailand</p>
                  </div>
                  <div className="items">
                    <i>
                      <FaMapMarker />
                    </i>
                    <span>Hong Konk</span>
                    <p>China</p>
                  </div>
                  <div className="items">
                    <i>
                      <FaMapMarker />
                    </i>
                    <span>Singapore</span>
                    <p>Singapore</p>
                  </div>
                  <div className="items">
                    <i>
                      <FaMapMarker />
                    </i>
                    <span>New York</span>
                    <p>New York State, United State</p>
                  </div>
                  <div className="items">
                    <i>
                      <FaMapMarker />
                    </i>
                    <span>Tokyo</span>
                    <p>Japan</p>
                  </div>
                  <div className="items">
                    <i>
                      <FaMapMarker />
                    </i>
                    <span>Las Vegas</span>
                    <p>Clark Country, Nevada, United State</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <nav className="navbar_top">
          <Link to="/">App</Link>
          <Link to="/">Help</Link>
          <Link to="/">
            <img src="/assets/language.png" className="l_img" alt="" />
          </Link>
          <Link to="/">USD</Link>
          <Link to="/">Search Bookings</Link>
          <Link to="/">Sign in / Register</Link>
        </nav>
      </div>
      <div className="nav_wrapper">
        <nav className="navbar_bottom">
          <Link to="/">Hotels</Link>
          <Link to="/">Flights</Link>
          <Link to="/">Trains</Link>
          <Link to="/">Cars</Link>
          <Link to="/">Attractions & Tickets</Link>
          <Link to="/">Bundle & Save</Link>
          <Link to="/">Attractions</Link>
          <Link to="/">Trip.com Rewards</Link>
          <Link to="/">Deals</Link>
        </nav>
      </div>
      <Banner />
    </div>
  );
};

export default Header;
