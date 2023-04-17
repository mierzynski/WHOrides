import MessageContainer from "./MessageContainer";
import { useCookies } from "react-cookie";
import ScrollableFeed from "react-scrollable-feed";

const Chat = ({ descendingOrderMessages }) => {
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const user = cookies.UserId;

  return (
    <div className="chatContainer">
      <ScrollableFeed>
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
      </ScrollableFeed>
    </div>
  );
};

export default Chat;
