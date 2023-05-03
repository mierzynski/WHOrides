import { useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

const ChatInput = ({ chatId, updateChat }) => {
  const [textArea, setTextArea] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const userId = cookies.UserId;
  const userName = cookies.UserName;

  const addMessage = async () => {
    if (textArea) {
      const message = {
        date: new Date().toISOString(),
        sender_id: userId,
        sender_name: userName,
        chatId: chatId,
        message: textArea,
      };

      try {
        await axios.post("http://localhost:8000/message", { message });
        updateChat();
        setTextArea("");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="chat_input">
      <button className="sendMessage_button" onClick={addMessage}>
        Send
      </button>
      <textarea
        id="textAreaMessage"
        value={textArea}
        onChange={(e) => setTextArea(e.target.value)}
      />
    </div>
  );
};

export default ChatInput;
