import { FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

const FriendAvatar = () => {
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const [friends, setFriends] = useState(null);
  const [pendingFriends, setPendingFriends] = useState(null);
  const user = cookies.UserId;

  const getFriends = async () => {
    try {
      const response = await axios.get("http://localhost:8000/friends", {
        params: { userId: user },
      });
      setFriends(response.data.acceptedFriends);
      setPendingFriends(response.data.pendingFriends);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFriends();
  }, []);

  return (
    <>
      {pendingFriends?.map((friend) => (
        <div className="friendAvatarAndName">
          <div className="nameOfFriend_avatar">{friend.name}</div>
          <FaUser className="userFa_friendsChat pendinguserFa" />
        </div>
      ))}
      {friends?.map((friend) => (
        <div className="friendAvatarAndName">
          <div className="nameOfFriend_avatar">{friend.name}</div>
          <FaUser className="userFa_friendsChat" />
        </div>
      ))}
    </>
  );
};
export default FriendAvatar;
