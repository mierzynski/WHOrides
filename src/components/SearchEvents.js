import EventThumbnail from "./EventThumbnail";
import { useState } from "react";

const SearchEvents = () => {
  const surfaceTypes = ["road", "gravel", "forest", "mix"];
  const [title, setTitle] = useState("TITLE OF EVENT");
  const [distance, setDistance] = useState(60);
  const [avgPace, setAvgPace] = useState(20);
  const [surface, setSurface] = useState("road");
  const [description, setDescription] = useState("A few words about event");
  const [startLocation, setStartLocation] = useState("Poznań, Most Teatralny");
  const [date, setDate] = useState("2023.04.20 5:30pm");

  const detailsArray = [
    title,
    distance,
    avgPace,
    surface,
    startLocation,
    description,
    date,
  ];

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
                // onChange={(e) => setDate(e.target.value)}
              ></input>
              <span id="minusRange">-</span>
              <input
                className="valueRangeInput"
                type="number"
                placeholder="60"
                required={true}
                // onChange={(e) => setDate(e.target.value)}
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
                // onChange={(e) => setDate(e.target.value)}
              ></input>
              <span id="minusRange">-</span>
              <input
                className="valueRangeInput"
                type="number"
                placeholder="21"
                required={true}
                // onChange={(e) => setDate(e.target.value)}
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
                // onChange={(e) => setSurface(e.target.value)}
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
              // onChange={(e) => setDate(e.target.value)}
            ></input>
          </div>
          <button className="eventFilters_searchButton searchOrCreate_buttonClicked">
            SEARCH
          </button>
        </div>
      </div>
      <div id="events_midContainer">
        <div className="eventsResultRow">
          <EventThumbnail detailsArray={detailsArray} />
          <EventThumbnail detailsArray={detailsArray} />
          <EventThumbnail detailsArray={detailsArray} />
        </div>
        <div className="eventsResultRow">
          <EventThumbnail detailsArray={detailsArray} />
          <EventThumbnail detailsArray={detailsArray} />
          <EventThumbnail detailsArray={detailsArray} />
        </div>
        <div className="eventsResultRow">
          <EventThumbnail detailsArray={detailsArray} />
          <EventThumbnail detailsArray={detailsArray} />
          <EventThumbnail detailsArray={detailsArray} />
        </div>
        <div className="eventsResultRow">
          <EventThumbnail detailsArray={detailsArray} />
          <EventThumbnail detailsArray={detailsArray} />
          <EventThumbnail detailsArray={detailsArray} />
        </div>
      </div>
      <div className="events_filtersAndDetailsContainer">
        <div className="filtersAndDetailsEventsBg bg_rectangle">
          <div className="eventDetailsAndFilters_title">TITLE OF EVENT</div>
          <div id="eventDetails_createdBy">created by:</div>
          <div id="eventDetails_author">Jarek 23, 2/5 (6 rates)</div>
          <div id="eventDetails_participantsContainer">
            <span id="eventDetails_participantsLabel">PARTICIPANTS:</span>
            <span id="eventDetails_participantsNumber">11</span>
          </div>
          <div id="eventDetails_mapIMG"></div>
          <button id="eventDetails_clickToZoom">click to zoom track</button>
          <div id="eventDetails_buttonsContainer">
            <button className="eventDetails_buttons">ASK ABOUT EVENT</button>
            <button className="eventDetails_buttons">JOIN TO EVENT</button>
          </div>
          <div id="eventDetails_date">2023.04.20 5:30pm</div>
        </div>
      </div>
    </div>
  );
};

export default SearchEvents;
