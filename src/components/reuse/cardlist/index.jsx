import { FaStar } from "react-icons/fa";
import "./cardlist.css";
const CardList = () => {
  return (
    <div className="cardlist">
      <div className="card_wrapper">
        <div className="list_items">
          <img src="/assets/card/card_image/2.jpg" alt="" />
          <div className="list_box">
            <h2>
              Swissotel Bangkok Ratchada (SHA Extra Plus){" "}
              <i>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </i>
            </h2>
            <div className="rating">
              <span>
                4.5 <small>/5</small>
              </span>
              <span>562 Reviews </span>
            </div>
            <div className="price">
              <small>From</small> <span>US$87</span>
            </div>
          </div>
        </div>
        <div className="list_items">
          <img src="/assets/card/card_image/1.jpg" alt="" />
          <div className="list_box">
            <h2>
              Bangkok Marriott Marquis Queen's Park
              <i>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </i>
            </h2>
            <div className="rating">
              <span>
                4.5 <small>/5</small>
              </span>
              <span>562 Reviews </span>
            </div>
            <div className="price">
              <small>From</small> <span>US$87</span>
            </div>
          </div>
        </div>
        <div className="list_items">
          <img src="/assets/card/card_image/4.jpg" alt="" />
          <div className="list_box">
            <h2>
              Rosewood Bangkok
              <i>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </i>
            </h2>
            <div className="rating">
              <span>
                4.5 <small>/5</small>
              </span>
              <span>562 Reviews </span>
            </div>
            <div className="price">
              <small>From</small> <span>US$87</span>
            </div>
          </div>
        </div>
        <div className="lists_item">
          <img src="/assets/card/card_image/5.png" alt="" />
          <div className="img_content">
            <h2>
              Discover great deals on <br />
              hotels around the world
            </h2>
            <button>Go Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardList;
