import { useState } from "react";
import MessageContainer from "./MessageContainer";
import { useCookies } from "react-cookie";

const Chat = ({ messages }) => {
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const user = cookies.UserId;

  // var result = messages.map((message) => ({
  //   sender: message.sender,
  //   msg: message.msg,
  // }));
  // console.log(result);

  return (
    <>
      <div className="chatContainer">
        {messages.map((message, index) => {
          {
            message.sender == user ? (
              <MessageContainer
                isLoggedUser={true}
                name={message.sender}
                message={message.msg}
              />
            ) : (
              <MessageContainer
                isLoggedUser={false}
                name={message.sender}
                message={message.msg}
              />
            );
          }
        })}
        {/* <MessageContainer
          isLoggedUser={true}
          name={"Maciej"}
          message={messages[0].msg}
        /> */}
      </div>
    </>
  );
};

export default Chat;
