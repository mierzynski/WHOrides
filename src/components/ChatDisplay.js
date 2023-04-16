import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import Chat from "./Chat";

const ChatDisplay = ({ chat }) => {
  const [messages, setMessages] = useState(chat.messages);

  // messages?.forEach((message) => {
  //   const formattedMessage = {};
  //   formattedMessage["name"] = user?.first_name;
  //   formattedMessage["img"] = user?.url;
  //   formattedMessage["message"] = message.message;
  //   formattedMessage["timestamp"] = message.timestamp;
  //   messages.push(formattedMessage);
  // });

  // const descendingOrderMessages = messages?.sort((a, b) =>
  //   a.timestamp.localeCompare(b.timestamp)
  // );

  return (
    <>
      <div className="chatWindow bg_rectangle">
        <div className="chatHeader">
          <span>Chat</span>
          <FaTimes id="closeWindow" />
        </div>
        <Chat messages={messages} />
        {/* <ChatInput
        user={user}
        clickedUser={clickedUser}
        getUserMessages={getUsersMessages}
        getClickedUsersMessages={getClickedUsersMessages}
      /> */}
      </div>
    </>
  );
};

export default ChatDisplay;
