import { useState } from "react";
import EventThumbnail from "./EventThumbnail";

const CreateEvents = () => {
  const surfaceTypes = ["road", "gravel", "forest", "mix"];
  const [title, setTitle] = useState("TITLE OF EVENT");
  const [distance, setDistance] = useState(60);
  const [avgPace, setAvgPace] = useState(20);
  const [surface, setSurface] = useState("road");
  const [description, setDescription] = useState("A few words about event");
  const [startLocation, setStartLocation] = useState("Poznań, Most Teatralny");
  const [date, setDate] = useState("2023.04.20 5:30pm");
  const [isPublic, setIsPublic] = useState(true);

  const detailsArray = [
    title,
    distance,
    avgPace,
    surface,
    startLocation,
    description,
    date,
  ];

  const handleIsPublic = () => {
    setIsPublic((isPublic) => !isPublic);
  };

  return (
    <>
      <div className="livePreviewContainer"></div>
      <div className="createEventContainer bg_rectangle">
        <input
          id="createTitleEvent"
          type="text"
          placeholder="TITLE OF EVENT"
          required={true}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <div className="eventDetails">
          <div className="eventDetailsInputs">
            <div className="eventDetailInput">
              <span>distance:</span>
              <div className="inputWithUnit">
                <input
                  type="number"
                  placeholder="60"
                  required={true}
                  onChange={(e) => setDistance(e.target.value)}
                ></input>
                <span>km</span>
              </div>
            </div>
            <div className="eventDetailInput">
              <span>average pace:</span>
              <div className="inputWithUnit">
                <input
                  type="number"
                  placeholder="20"
                  required={true}
                  onChange={(e) => setAvgPace(e.target.value)}
                ></input>
                <span>km/h</span>
              </div>
            </div>
            <div className="eventDetailInput">
              <span>surface:</span>
              <select
                required={true}
                onChange={(e) => setSurface(e.target.value)}
              >
                {surfaceTypes.map((el) => (
                  <option key={el}>{el} </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <textarea
          id="createEventDescription"
          type="text"
          placeholder="A few words about event"
          maxlength="100"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <div className="locationDateSurfaceLabels">start location:</div>
        <input
          className="locationDateSurfaceInputs"
          type="text"
          placeholder="Poznań, Most Teatralny"
          required={true}
          onChange={(e) => setStartLocation(e.target.value)}
        ></input>
        <div className="locationDateSurfaceLabels">start date:</div>
        <input
          className="locationDateSurfaceInputs"
          type="text"
          placeholder="2023.04.20 5:30pm"
          required={true}
          onChange={(e) => setDate(e.target.value)}
        ></input>
        <div className="locationDateSurfaceLabels">status:</div>
        <div id="statusButtons">
          <button
            className={
              isPublic ? "eventStatus_button" : "eventStatus_buttonClicked"
            }
            onClick={handleIsPublic}
          >
            PRIVATE
          </button>
          <button
            className={
              isPublic ? "eventStatus_buttonClicked" : "eventStatus_button"
            }
            onClick={handleIsPublic}
          >
            PUBLIC
          </button>
        </div>
        <button id="createEvent_button">CREATE EVENT</button>
      </div>
      <div className="livePreviewContainer">
        <span id="livePreviewLabel">LIVE PREVIEW</span>
        <EventThumbnail detailsArray={detailsArray} />
      </div>
    </>
  );
};

export default CreateEvents;
