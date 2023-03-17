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
            
        </div>
      </div>
    </div>
  );
};

export default Banner;
