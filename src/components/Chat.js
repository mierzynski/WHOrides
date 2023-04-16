const Chat = ({ messages }) => {
  return (
    <div className="chatContainer">
      <div className="messageContainer">
        <div className="messageLoggedUser">Hej, co u Ciebie?</div>
      </div>
      <div className="messageContainer">
        <div className="messageCorresponder">Cześć, dobrze</div>
      </div>
    </div>
  );
};

export default Chat;
