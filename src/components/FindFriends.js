import RowUser from "./RowUser";
import FiltersBar from "./FiltersBar";
import { FixedSizeList as List } from "react-window";

const FindFriends = () => {
  return (
    <div className="findFriends_container">
      <div className="column">
        <FiltersBar />
        <div className="data_list">
          <List height={400} itemCount={6} itemSize={100} width="100%">
            {RowUser}
          </List>
        </div>
      </div>

      <div className="column">
        <div className="details bg_rectangle"></div>
      </div>
    </div>
  );
};
export default FindFriends;
