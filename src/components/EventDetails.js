import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const EventDetails = ({ clickedEvent }) => {
  const [user, setUser] = useState(null);
  const currentYear = new Date().getFullYear();
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const navigate = useNavigate();
  const userId = cookies.UserId;
  const userName = cookies.UserName;
  const [chat, setChat] = useState();
  const [textArea, setTextArea] = useState("");
  const [isTextArea, setIsTextArea] = useState(false);

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
    if (textArea) {
      const participant = {
        date: new Date().toISOString(),
        user_id: userId,
        isAccepted: textArea,
      };

      try {
        await axios.post("http://localhost:8000/joinevent", { participant });
        // updateChat();
        // setTextArea("");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleAskAboutEvent = () => {
    setIsTextArea(true);
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
                >
                  ASK ABOUT EVENT
                </button>
                <button className="eventDetails_buttons">JOIN TO EVENT</button>
              </>
            )}
          </div>
          <div id="eventDetails_date">{clickedEvent.meeting_date}</div>
        </div>
      </div>
    </>
  );
};
export default EventDetails;
