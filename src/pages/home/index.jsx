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
        <PropertyCard />
      </div>
    </>
  );
};

export default Home;
