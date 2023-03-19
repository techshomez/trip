import Slider from "infinite-react-carousel";
import "./banner_slider.css";

const BannerSlider = () => {
  return (
    <div className="banner_slider">
      <div className="container">
        <div className="img_left">
          <img src="/assets/banner/banner-sm.webp" alt="" />
        </div>
        <div className="slider_right">
          <Slider dots>
            <div>
              <img src="/assets/slider/1.webp" alt="" />
            </div>
            <div>
              <img src="/assets/slider/2.webp" alt="" />
            </div>
            <div>
              <img src="/assets/slider/3.webp" alt="" />
            </div>
            <div>
              <img src="/assets/slider/4.webp" alt="" />
            </div>
            <div>
              <img src="/assets/slider/5.webp" alt="" />
            </div>
            <div>
              <img src="/assets/slider/6.webp" alt="" />
            </div>
            <div>
              <img src="/assets/slider/7.webp" alt="" />
            </div>
            <div>
              <img src="/assets/slider/8.webp" alt="" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;
