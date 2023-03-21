import { useState } from "react";
import "./cardtab.css";

const CardTab = ({ activeTab, setActiveTab, tab_btns }) => {
  return (
    <div className="card_tab">
      <div className="tab_items">
        {tab_btns.map((tab, i) => {
          return (
            <button
              onClick={() => setActiveTab(tab.btn_text)}
              className={tab.class}
              key={i}
            >
              {tab.btn_text}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CardTab;
