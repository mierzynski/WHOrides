import RowUser from "./RowUser";
import FiltersBar from "./FiltersBar";
import ProfileDetailsUser from "./ProfileDetailsUser";
import { useState, useEffect } from "react";
import axios from "axios";

const FindFriends = () => {
  const [clickedRowUser, setClickedRowUser] = useState();
  const [filters, setFilters] = useState();

  const handleClickRowUser = (user) => {
    setClickedRowUser(user);
  };

  return (
    <div className="findFriends_container">
      <div className="columnFindFriends">
        <FiltersBar setFilters={setFilters} />
        <div className="data_list">
          <RowUser
            handleClickRowUser={handleClickRowUser}
            newFilters={filters}
          />
        </div>
      </div>

      <div className="columnFindFriends">
        {clickedRowUser ? <ProfileDetailsUser user={clickedRowUser} /> : <></>}
      </div>
    </div>
  );
};
export default FindFriends;
