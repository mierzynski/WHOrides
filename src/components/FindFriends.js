import RowUser from "./RowUser";
import FiltersBar from "./FiltersBar";
import ProfileDetailsUser from "./ProfileDetailsUser";
import { useState } from "react";

const FindFriends = () => {
  const [clickedRowUser, setClickedRowUser] = useState();
  let filterArrays;
  const getFilters = (data) => {
    filterArrays = Object.keys(data).map((key) => [key, data[key]]);
    return filterArrays;
  };

  const handleClickRowUser = (user) => {
    setClickedRowUser(user);
  };

  return (
    <div className="findFriends_container">
      <div className="columnFindFriends">
        <FiltersBar getFilters={getFilters} />
        <div className="data_list">
          <RowUser handleClickRowUser={handleClickRowUser} />
        </div>
      </div>

      <div className="columnFindFriends">
        {clickedRowUser ? <ProfileDetailsUser user={clickedRowUser} /> : <></>}
      </div>
    </div>
  );
};
export default FindFriends;
