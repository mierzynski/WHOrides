import { FaTimes } from "react-icons/fa";
import Chat from "./Chat";
import ChatInput from "./ChatInput";
import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

const ChatDisplay = ({ chat, correspondingUserId }) => {
  const messages = [];
  const [currentChat, setCurrentChat] = useState(chat);
  const [isPendingFriend, setIsPendingFriend] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const user = cookies.UserId;
  // const [friendId, setFriendId] = useState(correspondingUserId);

  const isPendingFriendFunction = async () => {
    try {
      const response = await axios.get("http://localhost:8000/friends", {
        params: { userId: user },
      });
      response.data.pendingFriends.forEach(function (friend) {
        if (friend.user_id == correspondingUserId) {
          setIsPendingFriend(true);
        } else {
          setIsPendingFriend(false);
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
      <div className="chatWindow bg_rectangle">
        <div className="chatHeader">
          <span>
            Chat with{" "}
            {chat.members_id[0] == correspondingUserId
              ? chat.members_name[0]
              : chat.members_name[1]}
          </span>
          <FaTimes id="closeWindow" />
        </div>
        <Chat
          isPendingFriend={isPendingFriend}
          friendId={correspondingUserId}
          descendingOrderMessages={descendingOrderMessages}
        />
        <ChatInput chatId={chat.chatId} updateChat={updateChat} />
      </div>
    </>
  );
};

export default ChatDisplay;
