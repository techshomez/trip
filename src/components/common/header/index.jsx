import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import "./header.css";

const Header = () => {
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
              placeholder="Destination, attraction, hotel, etc"
            />
            <button>
              <i>
                <FaSearch />
              </i>
            </button>
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
          <Link to="/">Attractions & Ticket</Link>
          <Link to="/">Bundle & Save</Link>
          <Link to="/">Attractions</Link>
          <Link to="/">Trip.com Rewards</Link>
          <Link to="/">Deals</Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
