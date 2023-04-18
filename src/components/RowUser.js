import { FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";

const RowUser = ({ handleClickRowUser, newFilters }) => {
  const [users, setUsers] = useState(null);
  const [filters, setFilters] = useState();
  const currentYear = new Date().getFullYear();

  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8000/findusers", {
        params: { filters: newFilters },
      });
      setUsers(response.data);
      setFilters(newFilters);
    } catch (error) {
      console.log(error);
    }
  };

  if (newFilters && newFilters != filters) {
    getUsers();
  }

  return (
    <>
      {users?.map((user) => (
        <button
          key={user.id}
          className="row_user bg_rectangle"
          onClick={(e) => handleClickRowUser(user)}
        >
          <div className="avatar_rowUser">
            <FaUser className="userFa" />
          </div>
          <div className="details_rowUser">
            <div className="nameAndAge_rowUser">
              {user.name} {currentYear - user.birth_year}
            </div>
            <div className="rateAndComments_userRow">
              {user.rates.reduce((a, b) => a + b, 0) / user.rates.length}/5 (
              {user.rates.length}
              ratings)
            </div>
            <div className="rateAndComments_userRow">
              {user.comments.length} comments
            </div>
          </div>
          <div className="description_rowUser">{user.description}</div>
        </button>
      ))}
    </>
  );
};
export default RowUser;
