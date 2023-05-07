import { FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useCookies } from 'react-cookie';
import axios from "axios";


const Profile = () => {
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const [isFocus, setIsFocus] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [user, setUser] = useState();
  const userId = cookies.UserId;

  const [name, setName] = useState()
  const [userLocation, setUserLocation] = useState();
  const [description, setDescripton] = useState();
  const [userRangeStart, setUserRangeStart] = useState();
  const [userRangeEnd, setUserRangeEnd] = useState();
  const [userAveragePaceStart, setUserAveragePaceStart] = useState();
  const [userAveragePaceEnd, setUserAveragePaceEnd] = useState();
 



  // GET USER DATA 
  const getUserData = async (e) => {
    try {
      const response = await axios.get('http://localhost:8000/users', {
        params: {userId}
      })
      setUser(response.data)
    }
    catch (error) {
      console.log(error)
    }
  }


  // PRZYCISK SAVE
  const handleSaveChanges = async (e) => {
    e.preventDefault()
    try {
        const response = await axios.put('http://localhost:8000/users', {userId, userLocation, description, userRangeStart, userRangeEnd, userAveragePaceStart, userAveragePaceEnd})
        const success = response.satusCode === 200
        // window.location.reload(false);
        getUserData()
        console.log(user)
        if (success) console.log('saved')
    }
    catch (error) {
      console.log(error)
    }
  }

  const handleClick = (event) => {
    let buttonClass = event.target.className;

    if (buttonClass == "notClickedButtonType") {
      event.target.className = "clickedButtonType";
    } else {
      event.target.className = "notClickedButtonType";
    }
  };

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

  useEffect(() => {
    getUserData();
  }, [])

  console.log(user)
  // console.log(user.description)

  return (
    <div className="bg_rectangle">
      {/* ZDJĘCIA */}
      <div className="photos_profile_row">
        <FaUser className="userFa avatar_rowUser profile_avatar" />
        <FaUser
          className="userFa avatar_rowUser profile_avatar"
          id="profile_main_avatar"
        />
        <button className="" id="upload_photo">
          UPLOAD PHOTO
        </button>
        <FaUser className="userFa avatar_rowUser profile_avatar" />
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
              placeholder="22"
              onChange={(e) => setUserAveragePaceStart(e.target.value)}
            ></input>
            <div className="rangeMinus">-</div>
            <input
              className="inputRange"
              type="number"
              name="userAveragePaceEnd"
              placeholder="22"
              onChange={(e) => setUserAveragePaceEnd(e.target.value)}
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
            required="true">
              {/* {user.name} */}
          </div>
          <div className="user_details_type">name</div>
          
          <div
            className="user_details"
            id="userAge"
            type="text"
            name="userAge"
            required={true}
            placeholder="userAge"
            value={"24"}
            // onChange={handleChange}
          >
            19
            {/* {userAge} */}
          </div>
          <div className="user_details_type">age</div>
          
          <div className="rangeFilter"  id="user_details_type_location_1">
            <input
              className="inputLocation"
              id="userLocation"
              type="text"
              name="userLocation"
              required={true}
              placeholder="Warsaw"
              onChange={(e) => setUserLocation(e.target.value)}
            >
            </input>
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
              placeholder="22"
              onChange={(e) => setUserRangeStart(e.target.value)}
            ></input>
            <div className="rangeMinus">-</div>
            <input
              className="inputRange"
              type="number"
              name="userRangeEnd"
              placeholder="22"
              onChange={(e) => setUserRangeEnd(e.target.value)}
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
          placeholder="Something about you"
          value={description}
          onChange={(e) => setDescripton(e.target.value)}
          >  
          {/* {user.description} */}
        </textarea>
      </div>

      <div className="edit_details_button">
        <button className="button_curved" id="save_changes_profile" onClick={handleSaveChanges}>
          SAVE CHANGES
        </button>
      </div>
    </div>
  );
};
export default Profile;
