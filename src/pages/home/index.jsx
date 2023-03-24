import AppDownload from "../../components/appDownload";
import BannerSlider from "../../components/home/banner_slider_small";
import FooterTop from "../../components/home/footerTop";
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
          right_image="/assets/4.png"
          bg="#fdf3f2"
          tab_btns={[
            {
              id: 1,
              btn_text: "Bangkok",
              class: "active",
            },
            {
              id: 2,
              btn_text: "Hong Kong",
            },
            {
              id: 3,
              btn_text: "Singapore",
            },
            {
              id: 4,
              btn_text: "Tokyo",
            },
            {
              id: 5,
              btn_text: "Shanghai",
            },
            {
              id: 6,
              btn_text: "Seoul",
            },
            {
              id: 7,
              btn_text: "Osaka",
            },
            {
              id: 8,
              btn_text: "Phuket",
            },
          ]}
          property_items={[
            {
              id: 1,
              title: "Swissotel Bangkok Ratchada (SHA Extra Plus)",
              review_1: "4.5",
              review_2: "/5",
              review_3: "562 Reviews",
              from: "From",
              price: "US$87",
              image: "/assets/card/card_image/2.jpg",
            },
            {
              id: 1,
              title: "Bangkok Marriott Marquis Queen's Park",
              rating: [
                {
                  id: 1,
                  r_1: "<FaStar />",
                  r_2: "<FaStar />",
                  r_3: "<FaStar />",
                  r_4: "<FaStar />",
                  r_5: "<FaStar />",
                },
              ],
              review_1: "4.5",
              review_2: "/5",
              review_3: "562 Reviews",
              from: "From",
              price: "US$87",
              image: "/assets/card/card_image/1.jpg",
            },
            {
              id: 1,
              title: "Rosewood Bangkok",
              rating: [
                {
                  id: 1,
                  r_1: "<FaStar />",
                  r_2: "<FaStar />",
                  r_3: "<FaStar />",
                  r_4: "<FaStar />",
                  r_5: "<FaStar />",
                },
              ],
              review_1: "4.5",
              review_2: "/5",
              review_3: "562 Reviews",
              from: "From",
              price: "US$87",
              image: "/assets/card/card_image/4.jpg",
            },
          ]}
          image_ads="/assets/card/card_image/5.png"
          content_1="Discover great deals on"
          content_2="hotels around the world"
          btn="Go Now"
        />

        <PropertyCard
          title="Popular Attractions"
          title_sub={[]}
          right_image="/assets/6.png"
          bg="#EFF8F9"
          tab_btns={[
            {
              id: 1,
              btn_text: "Bangkok",
              class: "active",
            },
            {
              id: 2,
              btn_text: "Hong Kong",
            },
            {
              id: 3,
              btn_text: "Tokyo",
            },
            {
              id: 4,
              btn_text: "Manila",
            },
            {
              id: 5,
              btn_text: "Taipei",
            },
            {
              id: 6,
              btn_text: "Los Angeles",
            },
          ]}
          property_items={[
            {
              id: 1,
              title: "Mahanakhon Sky Walk",
              review_1: "4.5",
              review_2: "/5",
              review_3: "562 Reviews",
              from: "From",
              price: "US$87",
              image: "/assets/card/card_image/7.jpg",
            },
            {
              id: 1,
              title: "Sea Life Bangkok Ocean World",
              rating: [
                {
                  id: 1,
                  r_1: "<FaStar />",
                  r_2: "<FaStar />",
                  r_3: "<FaStar />",
                  r_4: "<FaStar />",
                  r_5: "<FaStar />",
                },
              ],
              review_1: "4.5",
              review_2: "/5",
              review_3: "562 Reviews",
              from: "From",
              price: "US$87",
              image: "/assets/card/card_image/8.jpg",
            },
            {
              id: 1,
              title: "The Grand Palace",
              rating: [
                {
                  id: 1,
                  r_1: "<FaStar />",
                  r_2: "<FaStar />",
                  r_3: "<FaStar />",
                  r_4: "<FaStar />",
                  r_5: "<FaStar />",
                },
              ],
              review_1: "4.5",
              review_2: "/5",
              review_3: "562 Reviews",
              from: "From",
              price: "US$87",
              image: "/assets/card/card_image/9.jpg",
            },
          ]}
          image_ads="/assets/card/card_image/11.png"
          content_1="Discover great deals on"
          content_2="hotels around the world"
          btn="Go Now"
        />

        <PropertyCard
          title="Recommended Car Rentals"
          title_sub={[
            {
              id: 1,
              image: "/assets/card/13.png",
              text: "Free cancellations",
            },
            {
              id: 2,
              image: "/assets/card/5.webp",
              text: "No credit card fees",
            },
            {
              id: 3,
              image: "/assets/card/1.png",
              text: "Service you can rely on",
            },
          ]}
          right_image="/assets/12.png"
          bg="#F7FAFC"
          tab_btns={[
            {
              id: 1,
              btn_text: "New York",
              class: "active",
            },
            {
              id: 2,
              btn_text: "Los Angeles",
            },
            {
              id: 3,
              btn_text: "Orlando",
            },
            {
              id: 4,
              btn_text: "Las Vegas",
            },
            {
              id: 5,
              btn_text: "Chicago",
            },
            {
              id: 6,
              btn_text: "Mexico City",
            },
            {
              id: 7,
              btn_text: "Mississauga",
            },
            {
              id: 8,
              btn_text: "Richmond",
            },
          ]}
          property_items={[
            {
              id: 1,
              title: "Toyota Corolla or Similar",
              review_1: "4.5",
              review_2: "/5",
              review_3: "Excellent",
              from: "From",
              price: "US$80.02",
              image: "/assets/card/card_image/14.png",
            },
            {
              id: 2,
              title: "Nissan Versa or Similar",
              review_1: "4.5",
              review_2: "/5",
              review_3: "Excellent",
              from: "From",
              price: "US$87",
              image: "/assets/card/card_image/16.png",
            },
            {
              id: 3,
              title: "Toyota Yaris 2 Doors or Similar              ",
              review_1: "4.5",
              review_2: "/5",
              review_3: "562 Reviews",
              from: "From",
              price: "US$87",
              image: "/assets/card/card_image/17.png",
            },
          ]}
          image_ads="/assets/card/card_image/19.png"
          content_1="Discover great deals on"
          content_2="hotels around the world"
          btn="Go Now"
        />
      </div>
      <AppDownload />
      <FooterTop />
    </>
  );
};

export default Home;
