import FriendAvatar from "./FriendAvatar";
import ChatRow from "./ChatRow";
import { useState } from "react";
import { useCookies } from "react-cookie";
import ChatDisplay from "./ChatDisplay";

const Chat = () => {
  const [clickedChatRow, setClickedChatRow] = useState();
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const user = cookies.UserId;

  const handleClickChatRow = (id) => {
    setClickedChatRow(id);
  };

  return (
    <div className="findFriends_container">
      <div className="columnFindFriends">
        <div className="chatFriends bg_rectangle">
          <div className="friendsRectangle">
            <FriendAvatar />
            <FriendAvatar />
            <FriendAvatar />
            <FriendAvatar />
            <FriendAvatar />
            <FriendAvatar />
            <FriendAvatar />
            <FriendAvatar />
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
        {clickedChatRow ? <ChatDisplay chatId={clickedChatRow} /> : <></>}
      </div>
    </div>
  );
};
export default Chat;
