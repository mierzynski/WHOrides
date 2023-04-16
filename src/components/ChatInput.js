import { useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

const ChatInput = ({ chatId, updateChat }) => {
  const [textArea, setTextArea] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const userId = cookies.UserId;

  const addMessage = async () => {
    const message = {
      date: new Date().toISOString(),
      sender_id: userId,
      sender_name: "Mati",
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
