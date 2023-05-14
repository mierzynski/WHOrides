import { useState } from "react";
import EventThumbnail from "./EventThumbnail";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

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
  const [image, setImage] = useState();
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const userId = cookies.UserId;
  const navigate = useNavigate();

  const detailsObj = {
    title: title,
    author_id: userId,
    distance: distance,
    avg_pace: avgPace,
    surface: surface,
    startLocation: startLocation,
    description: description,
    meeting_date: date,
    isPublic: isPublic,
    participants: [userId],
    map_img: image,
  };

  const handleIsPublic = () => {
    setIsPublic((isPublic) => !isPublic);
  };

  const convertToBase64 = (e) => {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.onerror = (error) => {
      console.log("Error: ", error);
    };
  };

  const handleCreateEvent = async (e) => {
    try {
      const response = await axios.post("http://localhost:8000/createevent", {
        detailsObj,
      });

      const success = response.status === 201;
      if (success) navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="livePreviewContainer">
        <div className="livePreviewContainer">
          <span id="livePreviewLabel">ADD SCREENSHOT OF MAP</span>
          <div className="bgEventThumbnail bg_rectangle">
            <label for="files" className="btn">
              Select Image
            </label>
            <input type="file" id="files" onChange={convertToBase64} />
            {image == "" || image == null ? (
              ""
            ) : (
              <img width={100} height={100} src={image} />
            )}
          </div>
        </div>
      </div>
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
        <button
          id="createEvent_button"
          type="submit"
          onClick={handleCreateEvent}
        >
          CREATE EVENT
        </button>
      </div>
      <div className="livePreviewContainer">
        <span id="livePreviewLabel">LIVE PREVIEW</span>
        <EventThumbnail detailsObj={detailsObj} />
      </div>
    </>
  );
};

export default CreateEvents;
