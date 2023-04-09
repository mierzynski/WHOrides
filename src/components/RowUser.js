import { FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";

const RowUser = ({ handleClickRowUser }) => {
  const [users, setUsers] = useState(null);
  const birthTmp = 1999;
  const currentYear = new Date().getFullYear();

  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8000/users", {
        params: { userBirthDate: birthTmp },
      });
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

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
            <div className="rateAndComments_userRow">10 comments</div>
          </div>
          <div className="description_rowUser">{user.description}</div>
        </button>
      ))}
    </>
  );
};
export default RowUser;
