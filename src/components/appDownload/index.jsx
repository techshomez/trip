import "./app_download.css";

const AppDownload = () => {
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
              <div className="form_group"></div>
            </div>
            <div className="divider">|</div>
            <div className="bottom_img">
              <div className="app_down">
                <img src="assets/android.png" alt="" />
                <img src="assets/ios.png" alt="" />
              </div>
              <div className="qrcode">
                <img src="/assets/qrcode.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
