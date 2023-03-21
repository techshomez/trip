import BannerSlider from "../../components/home/banner_slider_small";
import Page_Title from "../../components/reuse/page_title";
import PropertyCard from "../../components/reuse/propertycard";
import "./home.css";

const Home = () => {
  return (
    <>
      <Page_Title page_title="Trip.com Official Site" name="Home" />
      <div className="home">
        <div className="container"></div>
        <BannerSlider />
        <PropertyCard
          title="Featured Properties"
          title_sub={[
            {
              id: 1,
              image: "/assets/card/1.png",
              text: "We Price Match",
            },
            {
              id: 2,
              image: "/assets/card/2.png",
              text: "Hotel Booking Guarantee",
            },
            {
              id: 3,
              image: "/assets/card/3.png",
              text: "Hotel Stay Guarantee",
            },
          ]}
        />
      </div>
    </>
  );
};

export default Home;
