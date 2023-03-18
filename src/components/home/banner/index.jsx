import { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { BsDoorOpenFill } from "react-icons/bs";
import {
  FaCarAlt,
  FaExclamationCircle,
  FaLaptopHouse,
  FaMinus,
  FaPlane,
  FaPlus,
  FaRegStar,
  FaRegSun,
  FaSearch,
  FaSubway,
} from "react-icons/fa";
import "./banner.css";
import { useNavigate } from "react-router-dom";

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
    {
      id: 3,
      name: "New York",
    },
    {
      id: 4,
      name: "Hong Kong",
    },
    {
      id: 5,
      name: "San Diego",
    },
    {
      id: 6,
      name: "Bangkok",
    },
    {
      id: 7,
      name: "Tokyo",
    },
    {
      id: 8,
      name: "Singapore",
    },
    {
      id: 9,
      name: "Cancun",
    },
  ];

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };

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
              <div className="title">Rooms & Guests</div>
              <span
                onClick={() => setOpenOptions(!openOptions)}
                className="headerSearchText"
              >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
              {openOptions && (
                <div className="options">
                  <div className="optionItem">
                    <span className="optionText">Room</span>
                    <div className="optionCounter">
                      <button
                        disabled={options.room <= 1}
                        className="optionCounterButton"
                        onClick={() => handleOption("room", "d")}
                      >
                        <i>
                          <FaMinus />
                        </i>
                      </button>
                      <span className="optionCounterNumber">
                        {options.room}
                      </span>
                      <button
                        className="optionCounterButton"
                        onClick={() => handleOption("room", "i")}
                      >
                        <i>
                          <FaPlus />
                        </i>
                      </button>
                    </div>
                  </div>
                  <div className="optionItem">
                    <span className="optionText">
                      Adult <small>18+ yrs</small>
                    </span>
                    <div className="optionCounter">
                      <button
                        disabled={options.adult <= 1}
                        className="optionCounterButton"
                        onClick={() => handleOption("adult", "d")}
                      >
                        <i>
                          <FaMinus />
                        </i>
                      </button>
                      <span className="optionCounterNumber">
                        {options.adult}
                      </span>
                      <button
                        className="optionCounterButton"
                        onClick={() => handleOption("adult", "i")}
                      >
                        <i>
                          <FaPlus />
                        </i>
                      </button>
                    </div>
                  </div>
                  <div className="optionItem">
                    <span className="optionText">
                      Children <small>0-17 yrs</small>
                    </span>
                    <div className="optionCounter">
                      <button
                        disabled={options.children <= 0}
                        className="optionCounterButton"
                        onClick={() => handleOption("children", "d")}
                      >
                        <i>
                          <FaMinus />
                        </i>
                      </button>
                      <span className="optionCounterNumber">
                        {options.children}
                      </span>
                      <button
                        className="optionCounterButton"
                        onClick={() => handleOption("children", "i")}
                      >
                        <i>
                          <FaPlus />
                        </i>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="form_items">
              <div className="title">Keywords (optional)</div>
              <input type="text" placeholder="Airpot, Station, Property" />
            </div>
            <div className="form_btn">
              <button onClick={handleSearch}>
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
      <div className="rating_wrapper">
        <div className="rating_items">
          <div className="form_group">
            <input type="checkbox" name="" id="" />
            <span>I'm traveling for work</span>
            <i>
              <FaExclamationCircle />
            </i>
          </div>
          <div className="rating_list">
            <span>Star Rating</span>
            <div className="r_list">
              <h4>2</h4>
              <i>
                <FaRegStar />
              </i>
            </div>
            <div className="r_list">
              <h4>3</h4>
              <i>
                <FaRegStar />
              </i>
            </div>
            <div className="r_list">
              <h4>4</h4>
              <i>
                <FaRegStar />
              </i>
            </div>
            <div className="r_list">
              <h4>5</h4>
              <i>
                <FaRegStar />
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
