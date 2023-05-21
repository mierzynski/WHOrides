import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

const RowUser = ({ handleClickRowUser, newFilters }) => {
  const [users, setUsers] = useState(null);
  const [filters, setFilters] = useState();
  const currentYear = new Date().getFullYear();
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const user = cookies.UserId;

  const isYourProfile = (id) => {
    if (id == user) {
      return <span className="yourFriendTxt_userRow">(your profile)</span>;
    }
  };

  const roundRate = (rates) => {
    let returnedAvg;
    function round(value, step) {
      step || (step = 1.0);
      var inv = 1.0 / step;
      return Math.round(value * inv) / inv;
    }

    if (rates.length > 0) {
      let avgRate = rates.reduce((p, c) => p + c, 0) / rates.length;
      returnedAvg = round(avgRate, 0.5);
    } else {
      returnedAvg = 0;
    }

    return returnedAvg;
  };

  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8000/findusers", {
        params: { filters: newFilters },
      });
      // console.log(response.data);
      setUsers(response.data);
      setFilters(newFilters);
    } catch (error) {
      console.log(error);
    }
  };

  if (newFilters && newFilters != filters) {
    getUsers();
  }

  const isMyFriends = (array) => {
    if (array) {
      if (array.includes(user)) {
        return <span className="yourFriendTxt_userRow">(friend)</span>;
      }
    }
  };

  return (
    <>
      {users?.map((user) => (
        <button
          key={user.user_id}
          className="row_user bg_rectangle"
          onClick={(e) => handleClickRowUser(user)}
        >
          {user.images.length > 0 ? (
            <img src={user.images[0]} alt="img" className="avatar_rowUser" />
          ) : (
            <div className="avatarNoPhoto_rowUser">
              <FaUser className="userFa" />
            </div>
          )}

          <div className="details_rowUser">
            <div className="nameAndAge_rowUser">
              {user.name} {currentYear - user.birth_year}
            </div>
            <div className="rateAndComments_userRow">
              {roundRate(user.rates)}/5 ({user.rates.length} ratings)
            </div>
            <div className="rateAndComments_userRow">
              {user.comments.length} comments
            </div>
            {isMyFriends(user.friends)}
            {isYourProfile(user.user_id)}
          </div>
          <div className="description_rowUser">{user.description}</div>
        </button>
      ))}
    </>
  );
};
export default RowUser;
