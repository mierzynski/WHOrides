import FriendAvatar from "./FriendAvatar";
import ChatRow from "./ChatRow";
import { useState } from "react";
import ChatDisplay from "./ChatDisplay";
import { useCookies } from "react-cookie";
import { useLocation } from "react-router-dom";

const Chat = () => {
  const { state } = useLocation();
  let chatFromNav;
  if (state) {
    const { chat } = state;
    chatFromNav = chat;
  }
  const [clickedChatRow, setClickedChatRow] = useState(chatFromNav);
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const [friendId, setFriendId] = useState();
  const user = cookies.UserId;

  const handleClickChatRow = (chat) => {
    setClickedChatRow(chat);
    if (chat) {
      if (chat.members_id[0] == user) {
        setFriendId(chat.members_id[1]);
      } else {
        setFriendId(chat.members_id[0]);
      }
    }
  };

  return (
    <div className="findFriends_container">
      <div className="columnFindFriends">
        <div className="chatFriends bg_rectangle">
          <span>friends</span>
          <div className="friendsRectangle">
            <FriendAvatar />
          </div>
        </div>
        <div className="chatsBackground bg_rectangle">
          <div className="chatsRectangle">
            <ChatRow user={user} handleClickChatRow={handleClickChatRow} />
          </div>
        </div>
      </div>

      <div className="columnFindFriends">
        {clickedChatRow ? (
          <ChatDisplay
            chat={clickedChatRow}
            correspondingUserId={friendId}
            setClickedChatRow={setClickedChatRow}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
export default Chat;
