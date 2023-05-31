import EventDetails from "./EventDetails";
import EventThumbnail from "./EventThumbnail";
import { useState } from "react";

const SearchEvents = () => {
  const surfaceTypes = ["road", "gravel", "forest", "mix"];
  const [distanceMin, setDistanceMin] = useState(null);
  const [distanceMax, setDistanceMax] = useState(null);
  const [avgPaceMin, setAvgPaceMin] = useState(null);
  const [avgPaceMax, setAvgPaceMax] = useState(null);
  const [surface, setSurface] = useState(null);
  const [startLocation, setStartLocation] = useState(null);
  const [clickedEvent, setClickedEvent] = useState();

  const handleClickEvent = (event) => {
    setClickedEvent(event);
    console.log(event);
  };

  const newFilters = {
    distanceMin: distanceMin,
    distanceMax: distanceMax,
    avgPaceMin: avgPaceMin,
    avgPaceMax: avgPaceMax,
    surface: surface,
    startLocation: startLocation,
  };

  return (
    <div className="searchEvent_container">
      <div className="events_filtersAndDetailsContainer">
        <div className="filtersAndDetailsEventsBg bg_rectangle">
          <div className="eventDetailsAndFilters_title">FILTERS</div>
          <div className="eventFilters_filterRow">
            <div className="eventFilters_filterLabel">DISTANCE:</div>
            <div className="eventFilters_filterRangeInputsContainer">
              <input
                className="valueRangeInput"
                type="number"
                placeholder="22"
                required={true}
                onChange={(e) => setDistanceMin(e.target.value)}
              ></input>
              <span id="minusRange">-</span>
              <input
                className="valueRangeInput"
                type="number"
                placeholder="60"
                required={true}
                onChange={(e) => setDistanceMax(e.target.value)}
              ></input>
              <span className="unit">km</span>
            </div>
          </div>
          <div className="eventFilters_filterRow">
            <div className="eventFilters_filterLabel">AVG PACE:</div>
            <div className="eventFilters_filterRangeInputsContainer">
              <input
                className="valueRangeInput"
                type="number"
                placeholder="15"
                required={true}
                onChange={(e) => setAvgPaceMin(e.target.value)}
              ></input>
              <span id="minusRange">-</span>
              <input
                className="valueRangeInput"
                type="number"
                placeholder="21"
                required={true}
                onChange={(e) => setAvgPaceMax(e.target.value)}
              ></input>
              <span className="unit">km/h</span>
            </div>
          </div>
          <div className="eventFilters_filterRow">
            <div className="eventFilters_filterLabel">SURFACE:</div>
            <div className="eventFilters_filterRangeInputsContainer">
              <select
                className="eventFilters_select"
                required={true}
                onChange={(e) => setSurface(e.target.value)}
              >
                {surfaceTypes.map((el) => (
                  <option key={el}>{el} </option>
                ))}
              </select>
            </div>
          </div>
          <div className="eventFilters_filterRow">
            <div className="eventFilters_filterLabel">LOCATION:</div>
            <input
              className="eventFiltersLocationInput"
              type="text"
              placeholder="Poznań"
              required={true}
              onChange={(e) => setStartLocation(e.target.value)}
            ></input>
          </div>
          <button
            className="eventFilters_searchButton searchOrCreate_buttonClicked"
            // onClick={(e) => setClickedSearch(true)}
          >
            SEARCH
          </button>
        </div>
      </div>
      <div id="events_midContainer">
        <EventThumbnail
          handleClickEvent={handleClickEvent}
          newFilters={newFilters}
        />
      </div>
      {clickedEvent ? <EventDetails clickedEvent={clickedEvent} /> : <></>}
    </div>
  );
};

export default SearchEvents;
