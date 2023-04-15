import { FaUser } from "react-icons/fa";
import axios from "axios";
import { useEffect, useState } from "react";

const ChatRow = ({ user, handleClickChatRow }) => {
  const [chats, setChats] = useState(null);
  //   const [correspondingUsersArray, setCorrespondingUsersArray] = useState([]);
  //   const [correspondingUserObj, setCorrespondingUserObj] = useState();
  let tmpArrayCorrespondingUsers = [];
  let correspondingUserObjArray = [];

  const handleCorrespondingUsersArray = (chats) => {
    chats.forEach((chat) => {
      if (chat.members[0] != user) {
        tmpArrayCorrespondingUsers.push(chat.members[0]);
      } else {
        tmpArrayCorrespondingUsers.push(chat.members[0]);
      }
    });
  };

  const getAllChats = async () => {
    try {
      const response = await axios.get("http://localhost:8000/chats", {
        params: { userId: user },
      });
      if (response.data) {
        setChats(response.data);
        handleCorrespondingUsersArray(response.data);
        getCorrespondingUsers();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getCorrespondingUsers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/correspondingusers",
        {
          params: { tmpArrayCorrespondingUsers: tmpArrayCorrespondingUsers },
        }
      );
      correspondingUserObjArray.push(response.data);
      console.log(correspondingUserObjArray);
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
          onClick={(e) => handleClickChatRow(chat.id)}
        >
          <div className="chatRowAvatar">
            <FaUser />
          </div>
          <div className="chatRowNameAndLastMesage_container">
            <div className="chatRowName">
              {chat.members[0] == user ? chat.members[1] : chat.members[0]}
            </div>
            <div className="chatRowLastMessage">Hej, co u Ciebie?</div>
          </div>
          <div className="chatRowDate">01.04.2023</div>
        </button>
      ))}
    </>
  );
};
export default ChatRow;
