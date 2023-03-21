import { useState } from "react";
import CardList from "../cardlist";
import CardTab from "../cardTab";
import "./propertycard.css";

const PropertyCard = ({
  title,
  title_sub,
  right_image,
  bg,
  tab_btns,
  property_items,
  image_ads,
  content_1,
  content_2,
  btn,
}) => {
  const [activeTab, setActiveTab] = useState("Bangkok");
  return (
    <>
      <div className="card" style={{ background: `${bg}` }}>
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
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              tab_btns={tab_btns}
            />
          </div>
          <div className="heading_image">
            <img src={right_image} alt="" />
          </div>
        </div>
        <CardList
          property_items={property_items}
          image_ads={image_ads}
          content_1={content_1}
          content_2={content_2}
          btn={btn}
        />
      </div>
    </>
  );
};

export default PropertyCard;
