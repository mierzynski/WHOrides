import FriendAvatar from "./FriendAvatar";
import ChatRow from "./ChatRow";
import { useState, useEffect } from "react";
import ChatDisplay from "./ChatDisplay";
import { useCookies } from "react-cookie";

const Chat = () => {
  const [clickedChatRow, setClickedChatRow] = useState();
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const user = cookies.UserId;

  // const showChatDisplay = () => {
  //   return <ChatDisplay chat={clickedChatRow} />;
  // };

  const handleClickChatRow = (chat) => {
    setClickedChatRow(chat);
  };

  // useEffect(() => {
  //   showChatDisplay();
  // }, [clickedChatRow]);

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
        {clickedChatRow ? <ChatDisplay chat={clickedChatRow} /> : <></>}
      </div>
      {/* <div className="columnFindFriends">{showChatDisplay}</div> */}
    </div>
  );
};
export default Chat;
