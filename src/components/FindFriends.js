import RowUser from "./RowUser";
import { FixedSizeList as List } from "react-window";

const FindFriends = () => {
  return (
    <div className="findFriends_container">
      <div className="column">
        <div className="filters bg_rectangle">
          {/* first column with clickable buttons */}
          <div className="columnFilters">
            <div className="titleOfFilter">bike types</div>
            <div className="clicableTypes">
              <button className="clickedButtonType">gravel</button>
              <button className="notClickedButtonType">road</button>
              <button className="notClickedButtonType">mtb</button>
            </div>
            <div className="titleOfFilter">bike types</div>
            <div className="clicableTypes">
              <button className="clickedButtonType">gravel</button>
              <button className="notClickedButtonType">road</button>
              <button className="notClickedButtonType">mtb</button>
            </div>
          </div>
          {/* second column with ranges */}
          <div className="columnFilters">
            <div className="titleOfFilter">average pace</div>
            <div className="rangeFilter">
              <input
                className="inputRange"
                type="number"
                placeholder="22"
              ></input>
              <div className="rangeMinus">-</div>
              <input
                className="inputRange"
                type="number"
                placeholder="22"
              ></input>
            </div>
            <div className="titleOfFilter">distance range</div>
            <div className="rangeFilter">
              <input
                className="inputRange"
                type="number"
                placeholder="22"
              ></input>
              <div className="rangeMinus">-</div>
              <input
                className="inputRange"
                type="number"
                placeholder="22"
              ></input>
            </div>
          </div>
          {/* third column with filters */}
          <div className="columnFilters">
            <div className="titleOfFilter">age range</div>
            <div className="rangeFilter">
              <input
                className="inputRange"
                type="number"
                placeholder="22"
              ></input>
              <div className="rangeMinus">-</div>
              <input
                className="inputRange"
                type="number"
                placeholder="22"
              ></input>
            </div>
            <div className="titleOfFilter">location</div>
            <div className="rangeFilter">
              <input
                className="inputLocation"
                type="text"
                placeholder="Poznań"
              ></input>
            </div>
          </div>
        </div>
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
