import { FaUser } from "react-icons/fa";
import axios from "axios";
import { useEffect, useState } from "react";

const ChatRow = ({ user, handleClickChatRow }) => {
  const [chats, setChats] = useState(null);
  const actualDate = new Date();

  const getAllChats = async () => {
    try {
      const response = await axios.get("http://localhost:8000/chats", {
        params: { userId: user },
      });
      if (response.data) {
        setChats(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllChats();
  }, []);

  const convertMsToTime = (ms) => {
    function round(value, step) {
      step || (step = 1.0);
      var inv = 1.0 / step;
      return Math.round(value * inv) / inv;
    }

    let txt;
    let seconds = Math.floor(ms / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);

    if (hours > 24) {
      txt = round(hours / 24, 0.5) + " days";
    } else if (hours >= 1) {
      txt = round(hours, 0.5) + "h";
    } else {
      txt = minutes + "min";
    }

    return txt;
  };

  return (
    <>
      {chats?.map((chat) => (
        <button
          className="bgChatRow"
          key={chat.id}
          onClick={(e) => handleClickChatRow(chat)}
        >
          <div className="chatRowAvatar">
            <FaUser />
          </div>
          <div className="chatRowNameAndLastMesage_container">
            <div className="chatRowName">
              {chat.members_id[0] == user
                ? chat.members_name[1]
                : chat.members_name[0]}
            </div>
            <div className="chatRowLastMessage">
              {chat.messages.length < 1
                ? ""
                : chat.messages[chat.messages.length - 1].msg}
            </div>
          </div>
          <div className="chatRowDate">
            {chat.messages.length < 1
              ? ""
              : convertMsToTime(
                  actualDate -
                    new Date(chat.messages[chat.messages.length - 1].date)
                )}
          </div>
        </button>
      ))}
    </>
  );
};
export default ChatRow;
