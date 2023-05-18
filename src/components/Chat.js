import MessageContainer from "./MessageContainer";
import { useCookies } from "react-cookie";
import ScrollableFeed from "react-scrollable-feed";
import axios from "axios";

const Chat = ({ descendingOrderMessages, friendId, isPendingFriend }) => {
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const user = cookies.UserId;

  const acceptFriend = async () => {
    try {
      const response = await axios.put("http://localhost:8000/acceptfriend", {
        user,
        friendId,
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="chatContainer">
      {isPendingFriend ? (
        <div className="friendInvitation_container bg_rectangle">
          <span>Mati invited you to friends</span>
          <button onClick={acceptFriend} className="invitationButtons">
            accept
          </button>
        </div>
      ) : (
        ""
      )}
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
