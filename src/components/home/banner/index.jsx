import { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { BsDoorOpenFill } from "react-icons/bs";
import {
  FaCarAlt,
  FaLaptopHouse,
  FaPlane,
  FaRegSun,
  FaSearch,
  FaSubway,
} from "react-icons/fa";
import "./banner.css";

const Banner = () => {
  const [destination, setDestination] = useState(false);
  const [opendate, setOpendate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [selectedOption, setSelectedOption] = useState(null);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setDestination(false);
    console.log(selectedOption);
  };

  const des_data = [
    {
      id: 1,
      name: "Shanghai",
    },
    {
      id: 2,
      name: "Las Vegas",
    },
  ];

  return (
    <div className="banner">
      <div className="container">
        <h2>Your Trip Starts Here</h2>
        <div className="banner_desc">
          <span>
            <img src="/assets/check.png" alt="" /> Secure Payment
          </span>
          <div className="divider"></div>
          <span>
            <img src="/assets/bolt.png" alt="" /> Support in Approx. 30s
          </span>
        </div>
      </div>
      <div className="search_wrapper">
        <div className="search_box">
          <div className="form_holder">
            <div
              className="form_items"
              onClick={() => setDestination(!destination)}
            >
              <div className="title">Destination or property name</div>
              <input
                type="text"
                value={selectedOption || ""}
                placeholder="City, Airpot, Region, Landmark"
              />

              {destination && (
                <div className="destination_option">
                  <div className="title">
                    <h2>Popular Destinations</h2>
                  </div>
                  <div className="destination_items">
                    {des_data.map((d_data) => {
                      return (
                        <span
                          onClick={onOptionClicked(d_data)}
                          key={Math.random()}
                        >
                          {d_data.name}
                        </span>
                      );
                    })}
                  </div>
                  <div className="title_2">
                    <h2>United States & North America</h2>
                  </div>
                  <div className="destination_items">
                    <span>Shanghai</span>
                    <span>Shanghai</span>
                    <span>Shanghai</span>
                    <span>Shanghai</span>
                    <span>Shanghai</span>
                    <span>Shanghai</span>
                    <span>Shanghai</span>
                    <span>Shanghai</span>
                    <span>Shanghai</span>
                  </div>
                </div>
              )}
            </div>
            <div className="form_items">
              <div className="title">Check-in | Check-out</div>
              <span
                onClick={() => setOpendate(!opendate)}
                className="d_text"
              >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}</span>
              {opendate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="date"
                  minDate={new Date()}
                />
              )}
            </div>
            <div className="form_items">
              <div className="title">Destination or property name</div>
              <input type="text" placeholder="City, Airpot, Region, Landmark" />
            </div>
            <div className="form_items">
              <div className="title">Destination or property name</div>
              <input type="text" placeholder="City, Airpot, Region, Landmark" />
            </div>
            <div className="form_btn">
              <button>
                <i>
                  <FaSearch />
                </i>
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="search_cat">
          <div className="cat_holder">
            <div className="cat_items">
              <div className="cat_lists active">
                <i>
                  <BsDoorOpenFill />
                </i>
                <span>Hotels</span>
              </div>
              <div className="cat_lists">
                <i>
                  <FaPlane />
                </i>
                <span>Flights</span>
              </div>
              <div className="cat_lists">
                <i>
                  <FaSubway />
                </i>
                <span>Trains</span>
              </div>
              <div className="cat_lists">
                <i>
                  <FaCarAlt />
                </i>
                <span>Cars</span>
              </div>
              <div className="cat_lists">
                <i>
                  <FaRegSun />
                </i>
                <span>Attraction & Tickets</span>
              </div>
              <div className="cat_lists">
                <i>
                  <FaLaptopHouse />
                </i>
                <span>Bundle & Save</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
