import { FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import UpdatePhotos from "./UpdatePhotos";
import CreateEvents from "./CreateEvents";
import UploadPhotos from "./UploadPhotos";

const Profile = () => {
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const [isFocus, setIsFocus] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [user, setUser] = useState();
  const [isShown, setIsShown] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const userId = cookies.UserId;

  const [name, setName] = useState();
  const [location, setlocation] = useState("");
  const [description, setDescripton] = useState("");
  const [distance_min, setdistance_min] = useState("");
  const [distance_max, setdistance_max] = useState("");
  const [pace_min, setpace_min] = useState("");
  const [pace_max, setpace_max] = useState("");
  console.log(user);
  /////////////////////////////////////////////////////////////
  // GET USER DATA
  const getUserData = async (e) => {
    try {
      const response = await axios.get("http://localhost:8000/users", {
        params: { userId },
      });
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // PRZYCISK SAVE
  const handleSaveChanges = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put("http://localhost:8000/users", {
        userId,
        location,
        description,
        distance_min,
        distance_max,
        pace_min,
        pace_max,
      });
      const success = response.satusCode === 200;
      // window.location.reload(false);
      getUserData();
      console.log(user);
      if (success) console.log("saved");
    } catch (error) {
      console.log(error);
    }
  };

  //przytrzymanie buttona
  const handleClick = (event) => {
    let buttonClass = event.target.className;

    if (buttonClass == "notClickedButtonType") {
      event.target.className = "clickedButtonType";
    } else {
      event.target.className = "notClickedButtonType";
    }
  };

  //przycisk do zdjęć
  const handleClickShow = () => {
    setIsShown((current) => !current);
    setIsActive((current) => !current);
    console.log("elo");
  };

  //kliknięty button
  const buttonTypes = (value) => {
    return (
      <button
        className={isClicked ? "clickedButtonType" : "notClickedButtonType"}
        onClick={handleClick}
      >
        {value}
      </button>
    );
  };

  //pobranie danych przy ładowaniu strony
  useEffect(() => {
    getUserData();
    setpace_max(user ? user.pace_max : "0");
  }, []);

  ///////////////////////////////////////////////////////////////
  return (
    <div className="bg_rectangle">
      {isShown && (
        <UploadPhotos
          user={user}
          isActive={isActive}
          handleClickShow={handleClickShow}
        />
      )}

      {/* ZDJĘCIA */}
      <div className="photos_profile_row">
        {user ? (
          <>
            {user.images.length > 1 ? (
              <img src={user.images[1]} alt="img" className="avatarProfile" />
            ) : (
              <div className="avatarProfile_fauser">
                <FaUser />
              </div>
            )}
            {user.images.length > 0 ? (
              <img
                src={user.images[0]}
                alt="img"
                className="avatarProfile"
                id="profile_main_avatar"
              />
            ) : (
              <div className="avatarProfile_fauser" id="profile_main_avatar">
                <FaUser />
              </div>
            )}
            <button onClick={handleClickShow} className="" id="upload_photo">
              UPLOAD PHOTO
            </button>

            {user.images.length > 2 ? (
              <img src={user.images[2]} alt="img" className="avatarProfile" />
            ) : (
              <div className="avatarProfile_fauser">
                <FaUser />
              </div>
            )}
          </>
        ) : (
          ""
        )}
      </div>

      {/* LEWA KOLUMNA */}
      <div className="data_profile_row">
        <div id="collumn_data_profile_left">
          <div className="titleOfFilter title_details_left">bike types</div>
          <div className="clicableTypes">
            {buttonTypes("road")}
            {buttonTypes("gravel")}
            {buttonTypes("mtb")}
          </div>
          <div className="titleOfFilter title_details_left">average pace</div>
          <div className="rangeFilter">
            <input
              className="inputRange"
              type="number"
              name="userAveragePaceStart"
              placeholder="0"
              value={user ? user.pace_min : ""}
              onChange={(e) => setpace_min(e.target.value)}
            ></input>
            <div className="rangeMinus">-</div>
            <input
              className="inputRange"
              type="number"
              name="userAveragePaceEnd"
              placeholder="0"
              value={user ? user.pace_max : ""}
              onChange={(user) => setpace_max(user.target.value)}
            ></input>
          </div>
        </div>

        {/* ŚRODKOWA KOLUMNA */}
        <div id="collumn_data_profile_center">
          <div
            className="user_details"
            id="userName"
            type="text"
            name="userName"
            placeholder="userName"
            required="true"
          >
            {user ? user.name : ""}
          </div>
          <div className="user_details_type">name</div>

          <div
            className="user_details"
            id="userAge"
            type="text"
            name="userAge"
            placeholder="userAge"
          >
            {user ? user.birth_year : "unknown"}
          </div>
          <div className="user_details_type">birth year</div>

          <div className="rangeFilter" id="user_details_type_location_1">
            <input
              className="inputLocation"
              id="userLocation"
              type="text"
              name="userLocation"
              placeholder="Warsaw"
              //value nie zmienia się bo na stałe jest ustawione z db i odświeża się przy kazdym wpisie
              value={user ? user.location : ""}
              onChange={(e) => setlocation(e.target.value)}
            />
          </div>
          <div className="user_details_type" id="user_details_type_location_2">
            location
          </div>
        </div>

        {/* PRAWA KOLUMNA */}
        <div id="collumn_data_profile_right">
          <div className="titleOfFilter title_details_right">surface types</div>
          <div className="clicableTypes">
            {buttonTypes("mixed")}
            {buttonTypes("forest")}
            {buttonTypes("road")}
          </div>
          <div className="titleOfFilter title_details_right">
            distance range
          </div>
          <div className="rangeFilter">
            <input
              className="inputRange"
              type="number"
              name="userRangeStart"
              placeholder="0"
              value={user ? user.distance_min : ""}
              onChange={(e) => setdistance_min(e.target.value)}
            ></input>
            <div className="rangeMinus">-</div>
            <input
              className="inputRange"
              type="number"
              name="userRangeEnd"
              placeholder="0"
              value={user ? user.distance_max : ""}
              onChange={(e) => setdistance_max(e.target.value)}
            ></input>
          </div>
        </div>
      </div>

      {/* OPIS */}
      <div className="description_profile_row">
        <div className="description_profile_title">description</div>
        <textarea
          className="description_rowUser"
          id="description_rowUser_main_profile"
          name="userDescription"
          type="text"
          placeholder={user ? user.description : "Something about you"}
          value={user ? user.description : description}
          onChange={(e) => setDescripton(e.target.value)}
        ></textarea>
      </div>

      <div className="edit_details_button">
        <button
          className="button_curved"
          id="save_changes_profile"
          onClick={handleSaveChanges}
        >
          SAVE CHANGES
        </button>
      </div>
    </div>
  );
};
export default Profile;
