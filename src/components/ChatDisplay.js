import { FaTimes } from "react-icons/fa";
import Chat from "./Chat";
import ChatInput from "./ChatInput";
import axios from "axios";
import { useEffect, useState } from "react";

const ChatDisplay = ({ chat }) => {
  const messages = [];
  const [currentChat, setCurrentChat] = useState(chat);

  const updateChat = async () => {
    try {
      const response = await axios.get("http://localhost:8000/currentchat", {
        params: { chatId: chat.chatId },
      });
      if (response.data) {
        setCurrentChat(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    updateChat();
  }, []);

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
          <span>Chat</span>
          <FaTimes id="closeWindow" />
        </div>
        <Chat descendingOrderMessages={descendingOrderMessages} />
        <ChatInput chatId={chat.chatId} updateChat={updateChat} />
      </div>
    </>
  );
};

export default ChatDisplay;
