import { FaUser } from "react-icons/fa";

const RowUser = () => {
  const users = [
    {
      id: 1,
      name: "Tomek",
      age: 24,
      avgPace: "18-22",
      distance: "18-22",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate ",
    },
    {
      id: 1,
      name: "Tomek",
      age: 24,
      avgPace: "18-22",
      distance: "18-22",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate ",
    },
    {
      id: 1,
      name: "Tomek",
      age: 24,
      avgPace: "18-22",
      distance: "18-22",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate ",
    },
    {
      id: 1,
      name: "Tomek",
      age: 24,
      avgPace: "18-22",
      distance: "18-22",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate ",
    },
    {
      id: 1,
      name: "Tomek",
      age: 24,
      avgPace: "18-22",
      distance: "18-22",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate ",
    },
    {
      id: 1,
      name: "Tomek",
      age: 24,
      avgPace: "18-22",
      distance: "18-22",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate ",
    },
  ];

  return (
    <>
      {users.map((user) => (
        <div className="row_user bg_rectangle">
          <div className="avatar_rowUser">
            <FaUser className="userFa" />
          </div>
          <div className="details_rowUser">
            <div className="nameAndAge_rowUser">
              {user.name} {user.age}
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
