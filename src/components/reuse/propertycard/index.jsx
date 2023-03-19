import { useState } from "react";
import CardList from "../cardlist";
import CardTab from "../cardTab";
import "./propertycard.css";

const PropertyCard = () => {
  const [activeTab, setActiveTab] = useState("Bangkok");
  return (
    <div className="card">
      <div className="container">
        <div className="headings">
          <h2>Featured Properties</h2>
          <div className="heading_list">
            <span>
              <img src="/assets/card/1.png" alt="" />
              We Price Match
            </span>
            <span>
              <img src="/assets/card/2.png" alt="" />
              Hotel Booking Guarantee
            </span>
            <span>
              <img src="/assets/card/3.png" alt="" />
              Hotel Stay Guarantee
            </span>
          </div>
          <CardTab activeTab={activeTab} setActiveTab={setActiveTab} />
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
      return <CardList />;

    default:
      return <CardList />;
  }
};

export default PropertyCard;
