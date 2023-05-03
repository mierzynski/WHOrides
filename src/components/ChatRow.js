import { FaUser } from "react-icons/fa";
import axios from "axios";
import { useEffect, useState } from "react";

const ChatRow = ({ user, handleClickChatRow }) => {
  const [chats, setChats] = useState(null);

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
              {chat.messages[chat.messages.length - 1].msg}
            </div>
          </div>
          <div className="chatRowDate">
            {chat.messages[chat.messages.length - 1].date}
          </div>
        </button>
      ))}
    </>
  );
};
export default ChatRow;
