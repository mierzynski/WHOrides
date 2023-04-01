import { useState } from "react";

const FiltersBar = () => {
  const [isClicked, setIsClicked] = useState(false);

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
          <input className="inputRange" type="number" placeholder="22"></input>
          <div className="rangeMinus">-</div>
          <input className="inputRange" type="number" placeholder="22"></input>
        </div>
        <div className="titleOfFilter">location</div>
        <div className="rangeFilter">
          <input
            className="inputLocation"
            type="text"
            placeholder="Poznań"
          ></input>
        </div>
      </div>
    </div>
  );
};
export default FiltersBar;
