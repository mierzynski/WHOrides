import { useState } from "react";

const FiltersBar = (props) => {
  const [ageMin, setAgeMin] = useState(18);
  const [ageMax, setAgeMax] = useState(100);
  const [paceMin, setPaceMin] = useState(null);
  const [paceMax, setPaceMax] = useState(null);
  const [distanceMin, setDistanceMin] = useState(null);
  const [distanceMax, setDistanceMax] = useState(null);
  const [location, setLocation] = useState(null);
  const [roadBike, setRoadBike] = useState("");
  const [gravelBike, setGravelBike] = useState("");
  const [mtbBike, setMtbBike] = useState("");
  const [roadSurface, setRoadSurface] = useState("");
  const [gravelSurface, setGravelSurface] = useState("");
  const [mtbSurface, setMtbSurface] = useState("");

  const currentYear = new Date().getFullYear();

  const filters = {
    bike_types: [roadBike, gravelBike, mtbBike],
    surface_types: [roadSurface, gravelSurface, mtbSurface],
    pace_min: paceMin,
    pace_max: paceMax,
    distance_min: distanceMin,
    distance_max: distanceMax,
    birth_min: currentYear - ageMin,
    birth_max: currentYear - ageMax,
    location: location,
  };

  const handleClick = (event) => {
    let buttonClass = event.target.className;
    let buttonText = event.target.innerText;
    let buttonId = event.target.id;

    if (buttonId == "bikeTypes") {
      if (buttonClass == "notClickedButtonType") {
        switch (buttonText) {
          case "road":
            setRoadBike(buttonText);
            break;
          case "gravel":
            setGravelBike(buttonText);
            break;
          case "mtb":
            setMtbBike(buttonText);
            break;
        }
        event.target.className = "clickedButtonType";
      } else {
        switch (buttonText) {
          case "road":
            setRoadBike("");
            break;
          case "gravel":
            setGravelBike("");
            break;
          case "mtb":
            setMtbBike("");
            break;
        }
        event.target.className = "notClickedButtonType";
      }
    } else {
      if (buttonClass == "notClickedButtonType") {
        switch (buttonText) {
          case "road":
            setRoadSurface(buttonText);
            break;
          case "gravel":
            setGravelSurface(buttonText);
            break;
          case "mtb":
            setMtbSurface(buttonText);
            break;
        }
        event.target.className = "clickedButtonType";
      } else {
        switch (buttonText) {
          case "road":
            setRoadSurface("");
            break;
          case "gravel":
            setGravelSurface("");
            break;
          case "mtb":
            setMtbSurface("");
            break;
        }
        event.target.className = "notClickedButtonType";
      }
    }
  };

  const buttonTypes = (value, id) => {
    return (
      <button id={id} className={"notClickedButtonType"} onClick={handleClick}>
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
          {buttonTypes("road", "bikeTypes")}
          {buttonTypes("gravel", "bikeTypes")}
          {buttonTypes("mtb", "bikeTypes")}
        </div>
        <div className="titleOfFilter">surface types</div>
        <div className="clicableTypes">
          {buttonTypes("road", "surfaceTypes")}
          {buttonTypes("gravel", "surfaceTypes")}
          {buttonTypes("mtb", "surfaceTypes")}
        </div>
      </div>
      {/* second column with ranges */}
      <div className="columnFilters">
        <div className="titleOfFilter">average pace</div>
        <div className="rangeFilter">
          <input
            className="inputRange"
            type="number"
            placeholder="22"
            onChange={(e) => setPaceMin(e.target.value)}
          ></input>
          <div className="rangeMinus">-</div>
          <input
            className="inputRange"
            type="number"
            placeholder="22"
            onChange={(e) => setPaceMax(e.target.value)}
          ></input>
        </div>
        <div className="titleOfFilter">distance range</div>
        <div className="rangeFilter">
          <input
            className="inputRange"
            type="number"
            placeholder="22"
            onChange={(e) => setDistanceMin(e.target.value)}
          ></input>
          <div className="rangeMinus">-</div>
          <input
            className="inputRange"
            type="number"
            placeholder="22"
            onChange={(e) => setDistanceMax(e.target.value)}
          ></input>
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
