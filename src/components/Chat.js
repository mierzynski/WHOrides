import { useState } from "react";
import MessageContainer from "./MessageContainer";
import { useCookies } from "react-cookie";

const Chat = ({ descendingOrderMessages }) => {
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const user = cookies.UserId;

  return (
    <div className="chatContainer">
      {descendingOrderMessages.map((message, _index) => (
        <>
          {message.sender_id == user ? (
            <MessageContainer
              key={_index}
              isLoggedUser={true}
              name={message.name}
              message={message.message}
            />
          ) : (
            <MessageContainer
              key={_index}
              isLoggedUser={false}
              name={message.name}
              message={message.message}
            />
          )}
        </>
      ))}
    </div>
  );
};

export default Chat;
