import { useState } from "react";
import CardList from "../cardlist";
import CardTab from "../cardTab";
import "./propertycard.css";

const PropertyCard = ({ title, title_sub }) => {
  const [activeTab, setActiveTab] = useState("Bangkok");
  return (
    <div className="card">
      <div className="container">
        <div className="headings">
          <h2>{title}</h2>
          <div className="heading_list">
            {title_sub.map((sub_title, index) => {
              return (
                <span key={index}>
                  <img src={sub_title.image} alt="" />
                  {sub_title.text}
                </span>
              );
            })}
          </div>
          <CardTab
            class="active"
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
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          {getCorrectScreen(activeTab)}
        </div>
        <div className="heading_image">
          <img src="/assets/4.png" alt="" />
        </div>
      </div>
    </div>
  );
};

const getCorrectScreen = (tab) => {
  switch (tab) {
    case "Bangkok":
      return (
        <CardList
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
      );

    default:
      return <CardList />;
  }
};

export default PropertyCard;
