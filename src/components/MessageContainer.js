const MessageContainer = ({ isLoggedUser, name, message }) => {
  return (
    <>
      {isLoggedUser ? (
        <div className="messageContainerLoggedUser">
          <div className="messageAuthor">{name}</div>
          <div className="messageLoggedUser">{message}</div>
        </div>
      ) : (
        <div className="messageContainerCorrespondingUser">
          <div className="messageAuthor">{name}</div>
          <div className="messageCorrespondingUser">{message}</div>
        </div>
      )}
    </>
  );
};

export default MessageContainer;
