import { FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";

const RowUser = (props) => {
  const [users, setUsers] = useState(null);

  const userBirth = props.userBirth;

  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8000/users", {
        params: { userBirthDate: userBirth },
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
        <div className="row_user bg_rectangle">
          <div className="avatar_rowUser">
            <FaUser className="userFa" />
          </div>
          <div className="details_rowUser">
            <div className="nameAndAge_rowUser">
              {user.name} {user.birth_year}
            </div>
            <div className="rateAndComments_userRow">4.9/5 (16 ratings)</div>
            <div className="rateAndComments_userRow">10 comments</div>
          </div>
          <div className="description_rowUser">{user.description}</div>
        </div>
      ))}
    </>
  );
};
export default RowUser;
