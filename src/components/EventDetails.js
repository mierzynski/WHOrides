import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { FaTimes } from "react-icons/fa";

const EventDetails = ({ clickedEvent }) => {
  const [user, setUser] = useState(null);
  const currentYear = new Date().getFullYear();
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const navigate = useNavigate();
  const userId = cookies.UserId;
  const userName = cookies.UserName;
  const [chat, setChat] = useState();
  const [isJoined, setIsJoined] = useState(false);
  const [textArea, setTextArea] = useState("");
  const [isTextArea, setIsTextArea] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  const roundAvg = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum / array.length;
  };

  const askAboutEvent = async () => {
    const newChat = {
      chatId: userId + ";" + user.user_id,
      messages: [
        {
          date: new Date().toISOString(),
          sender_id: userId,
          sender_name: userName,
          msg: textArea,
        },
      ],
      members_id: [userId, user.user_id],
      members_name: [userName, user.name],
    };

    const invitedUserId = user.user_id;

    try {
      const response = await axios.post("http://localhost:8000/newchat", {
        newChat,
      });
      setChat(response.data.chat);
      navigate("/chat", { state: { chat: response.data.chat } });
    } catch (error) {
      console.log(error);
    }
    try {
      const response = await axios.put("http://localhost:8000/invitefriend", {
        userId,
        invitedUserId,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const jointToEvent = async () => {
    const participant = {
      date: new Date().toISOString(),
      user_id: userId,
      isAccepted: true,
    };
    if (clickedEvent.is_public == false) {
      participant.isAccepted = false;
    }

    try {
      const respond = await axios.post("http://localhost:8000/joinevent", {
        participant: participant,
        eventId: clickedEvent._id,
      });
      setIsJoined(true);
      alert(respond.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAskAboutEvent = () => {
    setIsTextArea(true);
  };

  const roundRate = (rates) => {
    let returnedAvg;
    let txt;
    function round(value, step) {
      step || (step = 1.0);
      var inv = 1.0 / step;
      return Math.round(value * inv) / inv;
    }

    if (rates.length > 0) {
      let avgRate = rates.reduce((p, c) => p + c, 0) / rates.length;
      returnedAvg = round(avgRate, 0.5);
    } else {
      returnedAvg = 0;
    }

    txt = returnedAvg + "/5 (" + rates.length + " ratings)";

    return txt;
  };

  const convTodateAndTime = (timestamp) => {
    const date = new Date(timestamp);
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const dateFormat = hours + ":" + minutes + ", " + date.toDateString();

    return dateFormat;
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
            {user ? roundRate(user.rates) : <></>}
          </div>
          <div id="eventDetails_participantsContainer">
            <span id="eventDetails_participantsLabel">PARTICIPANTS:</span>
            <span id="eventDetails_participantsNumber">
              {clickedEvent.participants.length}
            </span>
          </div>
          <img
            id="eventDetails_mapIMG"
            src={clickedEvent.map_img}
            onClick={() => setIsZoomed(true)}
          />
          {isZoomed ? (
            <div id="zoomedImg_container">
              <div id="closeZoom_container">
                <button
                  className="closeZoom_button closeWindow_button"
                  onClick={() => setIsZoomed(false)}
                >
                  <FaTimes id="closeWindow" />
                </button>
              </div>

              <img
                id="zoomedMapIMG"
                src={clickedEvent.map_img}
                // onClick={() => setIsZoomed(true)}
              />
            </div>
          ) : (
            ""
          )}
          <button id="eventDetails_clickToZoom">click to zoom track</button>
          <div id="eventDetails_buttonsContainer">
            {isTextArea ? (
              <div id="askAboutEvent_container">
                <textarea id="askAboutEvent_textarea"></textarea>
                <button id="askAboutEvent_button" onClick={askAboutEvent}>
                  send
                </button>
              </div>
            ) : (
              <>
                <button
                  className="eventDetails_buttons"
                  onClick={handleAskAboutEvent}
                  disabled
                >
                  ASK ABOUT EVENT
                </button>
                {isJoined ? (
                  <button
                    className="eventDetails_buttons"
                    onClick={jointToEvent}
                    disabled
                  >
                    JOIN TO EVENT
                  </button>
                ) : (
                  <button
                    className="eventDetails_buttons"
                    onClick={jointToEvent}
                  >
                    JOIN TO EVENT
                  </button>
                )}
              </>
            )}
          </div>
          <div id="eventDetails_date">
            {convTodateAndTime(clickedEvent.meeting_date)}
          </div>
        </div>
      </div>
    </>
  );
};
export default EventDetails;
