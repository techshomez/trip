import { useState } from "react";
import "./cardtab.css";

const tab_data = [
  {
    id: 1,
    title: "Bangkok",
    class: "active",
  },
  {
    id: 2,
    title: "Hong Kong",
  },
  {
    id: 3,
    title: "Singapore",
  },
  {
    id: 4,
    title: "Tokyo",
  },
  {
    id: 5,
    title: "Shanghai",
  },
  {
    id: 6,
    title: "Seoul",
  },
  {
    id: 7,
    title: "Osaka",
  },
  {
    id: 8,
    title: "Phuket",
  },
];

const CardTab = ({ activeTab, setActiveTab }) => {
  return (
    <div className="card_tab">
      <div className="tab_items">
        {tab_data.map((tab, i) => {
          return (
            <button
              onClick={() => setActiveTab(tab.name)}
              className={tab.class}
              key={i}
            >
              {tab.title}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CardTab;
