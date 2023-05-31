import { FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import UploadPhotos from "./UploadPhotos";
import CommentRow from "./CommentRow";

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

  const [roadBike, setRoadBike] = useState("");
  const [gravelBike, setGravelBike] = useState("");
  const [mtbBike, setMtbBike] = useState("");
  const [roadSurface, setRoadSurface] = useState("");
  const [gravelSurface, setGravelSurface] = useState("");
  const [mtbSurface, setMtbSurface] = useState("");
  const [events, setEvents] = useState();
  /////////////////////////////////////////////////////////////

  const getUserEvents = async (id) => {
    try {
      const response = await axios.get("http://localhost:8000/userevents", {
        params: { user_id: id },
      });
      setEvents(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  // GET USER DATA
  const getUserData = async (e) => {
    try {
      const response = await axios.get("http://localhost:8000/users", {
        params: { userId },
      });
      setUser(response.data);
      setlocation(response.data.location);
      setDescripton(response.data.description);
      setpace_min(response.data.pace_min);
      setpace_max(response.data.pace_max);
      setdistance_min(response.data.distance_min);
      setdistance_max(response.data.distance_max);
    } catch (error) {
      console.log(error);
    }
  };

  const userData = {
    user_id: userId,
    location: location,
    description: description,
    pace_min: pace_min,
    pace_max: pace_max,
    distance_min: distance_min,
    distance_max: distance_max,
    bike_types: [roadBike, gravelBike, mtbBike],
    surface_types: [roadSurface, gravelSurface, mtbSurface],
  };

  // PRZYCISK SAVE
  const handleSaveChanges = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put("http://localhost:8000/updateuser", {
        userData,
      });
      getUserData();
      alert("Changes have been saved");
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (event) => {
    let buttonClass = event.target.className;
    let buttonText = event.target.innerText;
    let buttonId = event.target.id;

    if (buttonId == "bikeTypes") {
      if (buttonClass == "notClickedButtonType") {
        switch (buttonText) {
          case "road":
            setRoadBike(buttonText);
            break;
          case "gravel":
            setGravelBike(buttonText);
            break;
          case "mtb":
            setMtbBike(buttonText);
            break;
        }
        event.target.className = "clickedButtonType";
      } else {
        switch (buttonText) {
          case "road":
            setRoadBike("");
            break;
          case "gravel":
            setGravelBike("");
            break;
          case "mtb":
            setMtbBike("");
            break;
        }
        event.target.className = "notClickedButtonType";
      }
    } else {
      if (buttonClass == "notClickedButtonType") {
        switch (buttonText) {
          case "road":
            setRoadSurface(buttonText);
            break;
          case "gravel":
            setGravelSurface(buttonText);
            break;
          case "mtb":
            setMtbSurface(buttonText);
            break;
        }
        event.target.className = "clickedButtonType";
      } else {
        switch (buttonText) {
          case "road":
            setRoadSurface("");
            break;
          case "gravel":
            setGravelSurface("");
            break;
          case "mtb":
            setMtbSurface("");
            break;
        }
        event.target.className = "notClickedButtonType";
      }
    }
  };

  //przycisk do zdjęć
  const handleClickShow = () => {
    setIsShown((current) => !current);
    setIsActive((current) => !current);
  };

  const buttonTypes = (value, id) => {
    return (
      <button id={id} className={"notClickedButtonType"} onClick={handleClick}>
        {value}
      </button>
    );
  };

  //pobranie danych przy ładowaniu strony
  useEffect(() => {
    getUserData();
    getUserEvents(userId);
  }, []);

  const convTodateAndTime = (timestamp) => {
    const date = new Date(timestamp);
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const dateFormat = hours + ":" + minutes + ", " + date.toDateString();

    return dateFormat;
  };

  ///////////////////////////////////////////////////////////////
  return (
    <div id="profile_container">
      <div id="commentsAndEventsProfile_container">
        <span className="columnTitle_profile">your events</span>
        <div className="scrollYColumn_profile">
          {events?.map((event) => (
            <button
              className="bgEventThumbnail bg_rectangle"
              key={event._id}
              // onClick={(e) => handleClickEvent(event)}
            >
              <div className="eventThumbnailTitle">{event.title}</div>
              <div className="eventThumbnailDetailRow">
                <span className="eventThumbnailLabels">distance:</span>
                <span className="eventThumbnailDetail">
                  {event.distance} km
                </span>
              </div>
              <div className="eventThumbnailDetailRow">
                <span className="eventThumbnailLabels">avg pace:</span>
                <span className="eventThumbnailDetail">
                  {event.avg_pace} km/h
                </span>
              </div>
              <div className="eventThumbnailDetailRow">
                <span className="eventThumbnailLabels">surface:</span>
                <span className="eventThumbnailDetail">{event.surface}</span>
              </div>
              <span className="eventThumbnailLabels">location:</span>
              <span className="eventThumbnailDetail">{event.location}</span>
              <div className="eventThumbnailsDescription">
                {event.description}
              </div>
              <div className="eventThumbnailDetail bottomDateEventThumbnail">
                {convTodateAndTime(event.meeting_date)}
              </div>
            </button>
          ))}
        </div>
      </div>
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
              {buttonTypes("road", "bikeTypes")}
              {buttonTypes("gravel", "bikeTypes")}
              {buttonTypes("mtb", "bikeTypes")}
            </div>
            <div className="titleOfFilter title_details_left">average pace</div>
            <div className="rangeFilter">
              <input
                className="inputRange"
                type="number"
                name="userAveragePaceStart"
                placeholder={user ? user.pace_min : ""}
                onChange={(e) => setpace_min(e.target.value)}
              ></input>
              <div className="rangeMinus">-</div>
              <input
                className="inputRange"
                type="number"
                name="userAveragePaceEnd"
                placeholder={user ? user.pace_max : ""}
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
                placeholder={user ? user.location : ""}
                onChange={(e) => setlocation(e.target.value)}
              />
            </div>
            <div
              className="user_details_type"
              id="user_details_type_location_2"
            >
              location
            </div>
          </div>

          {/* PRAWA KOLUMNA */}
          <div id="collumn_data_profile_right">
            <div className="titleOfFilter title_details_right">
              surface types
            </div>
            <div className="clicableTypes">
              {buttonTypes("road", "surfaceTypes")}
              {buttonTypes("gravel", "surfaceTypes")}
              {buttonTypes("mtb", "surfaceTypes")}
            </div>
            <div className="titleOfFilter title_details_right">
              distance range
            </div>
            <div className="rangeFilter">
              <input
                className="inputRange"
                type="number"
                name="userRangeStart"
                placeholder={user ? user.distance_min : ""}
                onChange={(e) => setdistance_min(e.target.value)}
              ></input>
              <div className="rangeMinus">-</div>
              <input
                className="inputRange"
                type="number"
                name="userRangeEnd"
                placeholder={user ? user.distance_max : ""}
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
            placeholder={user ? user.description : ""}
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
      <div id="commentsAndEventsProfile_container">
        <span className="columnTitle_profile">comments</span>
        <div className="scrollYColumn_profile">
          {user
            ? user.comments?.map((comment) => <CommentRow comment={comment} />)
            : "No comments"}
        </div>
      </div>
    </div>
  );
};
export default Profile;
