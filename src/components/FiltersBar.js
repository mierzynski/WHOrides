import { useState } from "react";

const FiltersBar = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const [ageMin, setAgeMin] = useState(null);
  const [ageMax, setAgeMax] = useState(null);
  const [location, setLocation] = useState(null);
  const filters = {
    bike_types: null,
    surface_types: null,
    avg_pace: null,
    distance_range: null,
    age_min: null,
    age_max: null,
    location: null,
  };
  const setFilters = () => {
    if (ageMin) {
      filters.age_min = ageMin;
    }
    if (ageMax) {
      filters.age_max = ageMax;
    }
    if (location) {
      filters.location = location;
    }
  };

  const handleClick = () => {
    setIsClicked((current) => !current);
  };

  const buttonTypes = (value) => {
    return (
      <button
        className={isClicked ? "clickedButtonType" : "notClickedButtonType"}
        onClick={handleClick}
      >
        {value}
      </button>
    );
  };

  return (
    <div className="filters bg_rectangle">
      {/* first column with clickable buttons */}
      <div className="columnFilters">
        <div className="titleOfFilter">bike types</div>
        <div className="clicableTypes">
          {buttonTypes("road")}
          {buttonTypes("gravel")}
          {buttonTypes("mtb")}
        </div>
        <div className="titleOfFilter">surface types</div>
        <div className="clicableTypes">
          {buttonTypes("road")}
          {buttonTypes("gravel")}
          {buttonTypes("mtb")}
        </div>
      </div>
      {/* second column with ranges */}
      <div className="columnFilters">
        <div className="titleOfFilter">average pace</div>
        <div className="rangeFilter">
          <input className="inputRange" type="number" placeholder="22"></input>
          <div className="rangeMinus">-</div>
          <input className="inputRange" type="number" placeholder="22"></input>
        </div>
        <div className="titleOfFilter">distance range</div>
        <div className="rangeFilter">
          <input className="inputRange" type="number" placeholder="22"></input>
          <div className="rangeMinus">-</div>
          <input className="inputRange" type="number" placeholder="22"></input>
        </div>
      </div>
      {/* third column with filters */}
      <div className="columnFilters">
        <div className="titleOfFilter">age range</div>
        <div className="rangeFilter">
          <input
            className="inputRange"
            type="number"
            placeholder="22"
            onChange={(e) => setAgeMin(e.target.value)}
          ></input>
          <div className="rangeMinus">-</div>
          <input
            className="inputRange"
            type="number"
            placeholder="22"
            onChange={(e) => setAgeMax(e.target.value)}
          ></input>
        </div>
        <div className="titleOfFilter">location</div>
        <div className="rangeFilter">
          <input
            className="inputLocation"
            type="text"
            placeholder="Poznań"
            onChange={(e) => setLocation(e.target.value)}
          ></input>
        </div>
      </div>
      {props.handleCallback(filters)}
    </div>
  );
};
export default FiltersBar;
