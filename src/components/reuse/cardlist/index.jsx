import { FaStar } from "react-icons/fa";
import "./cardlist.css";
const CardList = ({
  property_items,
  image_ads,
  content_1,
  content_2,
  btn,
  bg,
}) => {
  return (
    <div className="cardlist">
      <div className="card_wrapper">
        {property_items.map((p_items) => {
          return (
            <div className="list_items">
              <img src={p_items.image} alt="" />
              <div className="list_box">
                <h2>
                  {p_items.title}
                  <i>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </i>
                </h2>
                <div className="rating">
                  <div className="rating_f_child">
                    <h5>{p_items.review_1}</h5>
                    <h6>{p_items.review_2}</h6>
                  </div>
                  <span>{p_items.review_3} </span>
                </div>
                <div className="price">
                  <small>{p_items.from}</small> <span>{p_items.price}</span>
                </div>
              </div>
            </div>
          );
        })}
        <div className="lists_item">
          <img src={image_ads} alt="" />
          <div className="img_content">
            <h2>
              {content_1} <br />
              {content_2}
            </h2>
            <button>{btn}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardList;
