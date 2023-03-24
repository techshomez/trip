import "./app_download.css";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import { FiCheck, FiSearch } from "react-icons/fi";
import { useState } from "react";

const AppDownload = () => {
  const [formopen, setFormopen] = useState(false);

  return (
    <div className="app_download">
      <div className="container">
        <div className="app_left">
          <div className="img_hold">
            <img src="/assets/mobile.jpg" alt="" />
          </div>
        </div>
        <div className="app_right">
          <div className="right_top">
            <h2>Your all-in-one travel app.</h2>
            <p>
              Book flights, hotels, trains & rental cars anywhere in the world
              in just seconds. Get real-time flight updates, travel info,
              exclusive deals, and 30% more Trip Coins only on the app!
            </p>
          </div>
          <div className="top_bottom">
            <div className="bottom_form">
              <div className="bottom_nav">
                <span>SMS</span>
                <span>Email</span>
              </div>
              <article>
                Enter your phone number to receive a text with a link to
                download the app.
              </article>
              <div className="form_group">
                <span>
                  <small onClick={() => setFormopen(!formopen)}>
                    (+242)
                    <i>
                      <FaChevronDown />
                    </i>
                  </small>
                  {formopen && (
                    <div className="form_option">
                      <div className="search_frm">
                        <h3>Selected</h3>
                        <span>
                          Nigeria{" "}
                          <i>
                            <FiCheck />
                          </i>
                        </span>
                        <div className="search_input">
                          <i>
                            <FiSearch />
                          </i>
                          <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Country or region"
                          />
                        </div>
                      </div>
                      <div className="country_items">
                        <div className="item_title">Top</div>
                        <div className="item_list">
                          <div className="list">
                            <h5>Nigeria</h5> <h6>+234</h6>
                          </div>
                          <span className="list">
                            <h5>Philippines</h5> <h6>+63</h6>
                          </span>
                          <span className="list">
                            <h5>India</h5> <h6>+91</h6>
                          </span>
                          <span className="list">
                            <h5>Thailand</h5> <h6>+66</h6>
                          </span>
                          <span className="list">
                            <h5>United Kingdom</h5> <h6>+44</h6>
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </span>
                <input placeholder="Mobile Number" />
              </div>
              <button>Send App Link</button>
            </div>
            <div className="divider">
              <div className="divi_child"></div>
              <small>or</small>
              <div className="divi_child"></div>
            </div>
            <div className="bottom_img">
              <div className="app_down">
                <img src="assets/android.png" alt="" />
                <img src="assets/ios.png" alt="" />
              </div>
              <div className="qrcode">
                <img src="/assets/qrcode.png" alt="" />
                <img src="/assets/logo.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
