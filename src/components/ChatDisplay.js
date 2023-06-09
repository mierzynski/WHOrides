import { FaTimes } from "react-icons/fa";
import Chat from "./Chat";
import ChatInput from "./ChatInput";
import RateUser from "./RateUser";
import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

const ChatDisplay = ({ chat, correspondingUserId, setClickedChatRow }) => {
  const messages = [];
  const [currentChat, setCurrentChat] = useState(chat);
  const [isPendingFriend, setIsPendingFriend] = useState(false);
  const [isRateButtonClicked, setIsRateButtonClicked] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const user = cookies.UserId;
  // const [friendId, setFriendId] = useState(correspondingUserId);
  // console.log(chat);
  const handleRateUserClick = () => {
    setIsRateButtonClicked((isRateButtonClicked) => !isRateButtonClicked);
  };

  const handleCloseWindow = () => {
    setClickedChatRow(null);
  };

  const isPendingFriendFunction = async () => {
    try {
      const response = await axios.get("http://localhost:8000/friends", {
        params: { userId: user },
      });
      response.data.pendingFriends.forEach(function (friend) {
        if (friend.user_id == correspondingUserId) {
          setIsPendingFriend(true);
          console.log("true");
        } else {
          setIsPendingFriend(false);
          console.log("false");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const updateChat = async () => {
    try {
      const response = await axios.get("http://localhost:8000/currentchat", {
        params: { chatId: chat.chatId },
      });
      if (response.data) {
        setCurrentChat(response.data);
        // console.log(currentChat.members_id);
        // if (currentChat.members_id[0] == user) {
        //   setFriendId(currentChat.members_id[1]);
        //   console.log(currentChat.members_id[1]);
        // } else {
        //   setFriendId(currentChat.members_id[0]);
        //   console.log(currentChat.members_id[0]);
        // }
      }
      // console.log(friendId);
      // if (friendId) {
      //   isPendingFriendFunction();
      // }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    updateChat();
    isPendingFriendFunction();
  }, [chat, correspondingUserId]);

  currentChat.messages?.forEach((message) => {
    const formattedMessage = {};
    formattedMessage["sender_id"] = message.sender_id;
    formattedMessage["name"] = message.sender_name;
    formattedMessage["message"] = message.msg;
    formattedMessage["timestamp"] = message.date;
    messages.push(formattedMessage);
  });

  const descendingOrderMessages = messages?.sort((a, b) =>
    a.timestamp.localeCompare(b.timestamp)
  );

  return (
    <>
      {isRateButtonClicked ? (
        <RateUser
          ratedUserId={
            chat.members_id[0] == correspondingUserId
              ? chat.members_id[0]
              : chat.members_id[1]
          }
          setIsRateButtonClicked={setIsRateButtonClicked}
        />
      ) : (
        ""
      )}
      <div className="chatWindow bg_rectangle">
        <div className="chatHeader">
          <span>
            {chat.members_id[0] == correspondingUserId
              ? chat.members_name[0]
              : chat.members_name[1]}
          </span>
          <button className="closeWindow_button" onClick={handleCloseWindow}>
            <FaTimes id="closeWindow" />
          </button>
        </div>
        <Chat
          isPendingFriend={isPendingFriend}
          friendId={correspondingUserId}
          descendingOrderMessages={descendingOrderMessages}
        />
        <ChatInput chatId={chat.chatId} updateChat={updateChat} />
        <button id="rateUser_button" onClick={handleRateUserClick}>
          Rate or comment contact with{" "}
          {chat.members_id[0] == correspondingUserId
            ? chat.members_name[0]
            : chat.members_name[1]}
        </button>
      </div>
    </>
  );
};

export default ChatDisplay;
