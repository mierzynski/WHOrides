import axios from "axios";
import { useState } from "react";

const EventDetails = ({ clickedEvent }) => {
  const [user, setUser] = useState(null);
  const currentYear = new Date().getFullYear();

  const roundAvg = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum / array.length;
  };

  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:8000/users", {
        params: { userId: clickedEvent.author_id },
      });
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  if (clickedEvent) {
    getUser();
  }
  return (
    <>
      <div className="events_filtersAndDetailsContainer">
        <div className="filtersAndDetailsEventsBg bg_rectangle">
          <div className="eventDetailsAndFilters_title">
            {clickedEvent.title}
          </div>
          <div id="eventDetails_createdBy">created by:</div>
          <div id="eventDetails_author">
            {user ? user.name : ""} {user ? currentYear - user.birth_year : ""},{" "}
            {/* {user
              ? user.rates.reduce((a, b) => a + b, 0) / user.rates.length
              : ""} */}
            {/* /5 ({user ? user.rates.length : ""}
            ratings) */}
          </div>
          <div id="eventDetails_participantsContainer">
            <span id="eventDetails_participantsLabel">PARTICIPANTS:</span>
            <span id="eventDetails_participantsNumber">
              {clickedEvent.participants.length}
            </span>
          </div>
          <img id="eventDetails_mapIMG" src={clickedEvent.map_img} />
          <button id="eventDetails_clickToZoom">click to zoom track</button>
          <div id="eventDetails_buttonsContainer">
            <button className="eventDetails_buttons">ASK ABOUT EVENT</button>
            <button className="eventDetails_buttons">JOIN TO EVENT</button>
          </div>
          <div id="eventDetails_date">{clickedEvent.meeting_date}</div>
        </div>
      </div>
    </>
  );
};
export default EventDetails;
