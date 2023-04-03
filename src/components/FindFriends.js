import RowUser from "./RowUser";
import FiltersBar from "./FiltersBar";
import CommentRow from "./CommentRow";
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
        <div className="profile_details bg_rectangle">
          <div id="photos_profile"></div>
          <div id="detailsAndComments">
            <div id="detailsType">
              <span>name:</span>
              <span>age:</span>
              <span>location:</span>
              <span>avg pace:</span>
              <span>distance range:</span>
            </div>
            <div id="detailsData">
              <span>Maciej</span>
              <span>24</span>
              <span>Poznań</span>
              <span>18-22km/h</span>
              <span>30-60km</span>
            </div>
            <div id="commentsInProfileDetails">
              <span>comments</span>
              <div id="commentsHole">
                <CommentRow />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FindFriends;
