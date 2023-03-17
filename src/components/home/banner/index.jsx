import { BsDoorOpenFill } from "react-icons/bs";
import {
  FaCarAlt,
  FaLaptopHouse,
  FaPlane,
  FaRegSun,
  FaSubway,
} from "react-icons/fa";
import "./banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <h2>Your Trip Starts Here</h2>
        <div className="banner_desc">
          <span>
            <img src="/assets/check.png" alt="" /> Secure Payment
          </span>
          <div className="divider"></div>
          <span>
            <img src="/assets/bolt.png" alt="" /> Support in Approx. 30s
          </span>
        </div>
      </div>
      <div className="search_wrapper">
        <div className="search_box"></div>
        <div className="search_cat">
          <div className="cat_holder">
            <div className="cat_items">
              <div className="cat_lists active">
                <i>
                  <BsDoorOpenFill />
                </i>
                <span>Hotels</span>
              </div>
              <div className="cat_lists">
                <i>
                  <FaPlane />
                </i>
                <span>Flights</span>
              </div>
              <div className="cat_lists">
                <i>
                  <FaSubway />
                </i>
                <span>Trains</span>
              </div>
              <div className="cat_lists">
                <i>
                  <FaCarAlt />
                </i>
                <span>Cars</span>
              </div>
              <div className="cat_lists">
                <i>
                  <FaRegSun />
                </i>
                <span>Attraction & Tickets</span>
              </div>
              <div className="cat_lists">
                <i>
                  <FaLaptopHouse />
                </i>
                <span>Bundle & Save</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
