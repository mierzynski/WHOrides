import CommentRow from "./CommentRow";
import PhotoUserDetailsFind from "./PhotoUserDetailsFind";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useState } from "react";

const ProfileDetailsUser = (props) => {
  const [chat, setChat] = useState();
  const [textArea, setTextArea] = useState("");
  const user = props.user;
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const userId = cookies.UserId;
  const userName = cookies.UserName;

  const inviteFriend = async () => {
    const newChat = {
      chatId: userId + ";" + user.user_id,
      messages: [
        {
          date: new Date().toISOString(),
          sender_id: userId,
          sender_name: userName,
          msg: textArea,
        },
      ],
      members_id: [userId, user.user_id],
      members_name: [userName, user.name],
    };

    const invitedUserId = user.user_id;

    try {
      const response = await axios.post("http://localhost:8000/newchat", {
        newChat,
      });
      setChat(response.data.chat);
      navigate("/chat", { state: { chat: response.data.chat } });
      console.log(chat);
    } catch (error) {
      console.log(error);
    }
    try {
      const response = await axios.put("http://localhost:8000/invitefriend", {
        userId,
        invitedUserId,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const inviteFriend_onClick = () => {
    inviteFriend();
  };

  const isMyFriend = (array) => {
    if (array) {
      if (array.includes(userId)) {
        return (
          <button
            className="button_curved"
            id="inviteToFriends_button"
            onClick={() => navigate("/chat")}
          >
            SEND THIS FRIEND A MESSAGE
          </button>
        );
      } else {
        return (
          <>
            <button
              className="button_curved"
              id="inviteToFriends_button"
              onClick={inviteFriend_onClick}
            >
              INVITE TO FRIENDS & SEND MESSAGE
            </button>
            <textarea
              id="textAreaMessageWithInvite"
              value={textArea}
              onChange={(e) => setTextArea(e.target.value)}
            />
          </>
        );
      }
    }
  };

  return (
    <>
      <div className="profile_details bg_rectangle">
        <div id="photos_profile">
          <PhotoUserDetailsFind />
          <PhotoUserDetailsFind />
          <PhotoUserDetailsFind />
          <PhotoUserDetailsFind />
        </div>
        <div id="detailsAndComments">
          <div id="detailsType">
            <span>name:</span>
            <span>age:</span>
            <span>location:</span>
            <span>avg pace:</span>
            <span>distance range:</span>
          </div>
          <div id="detailsData">
            <span>{user.name}</span>
            <span>{currentYear - user.birth_year}</span>
            <span>{user.location}</span>
            <span>18-22km/h</span>
            <span>30-60km</span>
          </div>
          <div id="commentsInProfileDetails">
            <span>comments</span>
            <div id="commentsHole">
              {user.comments?.map((comment) => (
                <CommentRow comment={comment} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="inviteToFrfiends-background bg_rectangle">
        {isMyFriend(user.friends)}
      </div>
    </>
  );
};
export default ProfileDetailsUser;
