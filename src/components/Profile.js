import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { useCookies } from 'react-cookie';
import axios from "axios";


const Profile = () => {
  const [cookies, setCookie, removeCookie] = useCookies(null)
  const [isFocus, setIsFocus] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const { userData, setUserData} = useState({
    user_id: cookies.UserId,
    email: cookies.Email,
    userLocation: '',
    description: '',
    userRangeStart: '',
    userRangeEnd: '',
    userAverangePaceStart: '22',
    userAverangePaceEnd: '22',
  })
  // const [userLocation, setUserLocation] = useState(null);
  // const [description, setDescripton] = useState(null);
  // const [userRangeStart, setUserRangeStart] = useState(null);
  // const [userRangeEnd, setUserRangeEnd] = useState(null);
  // const [userAverangePaceStart, setUserAverangePaceStart] = useState(null);
  // const [userAverangePaceEnd, setUserAverangePaceEnd] = useState(null);
 
  // constructor(props) {
  //   super(props);
  //   this.handleChange = this.handleChange.bind(this);
  // }
  
  const handleChange = (e) => {
    const value = e.target.value
    const name = e.target.name  
    console.log (value + name)

    setUserData((prevState) => ({
      ...prevState,
      [name] : value 
    }))
  }

  const handleSaveChanges = async (e) => {
    e.preventDefault()
    try {
        const response = await axios.put('http://localhost:8000/users', {userData})
        const success = response.satusCode === 200
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

  return (
    <div className="bg_rectangle">
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
              name="userAverangePaceStart"
              placeholder="22"
              value={userData.userAverangePaceStart}
              onChange={handleChange}
            ></input>
            <div className="rangeMinus">-</div>
            <input
              className="inputRange"
              type="number"
              name="userAverangePaceEnd"
              placeholder="22"
              value={userData.userAverangePaceEnd}
              onChange={handleChange}
            ></input>
          </div>
        </div>

        <div id="collumn_data_profile_center">
          <div
            className="user_details"
            id="userName"
            type="text"
            name="userName"
            placeholder="userName"
            required="true"
            value={"Mati"}
            // onChange={handleChanges}
          >
            {/* {userName} */}
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
            onChange={handleChange}
          >
            {/* {userAge} */}
          </div>

          <div className="user_details_type">age</div>
          <div className="rangeFilter" id="user_details_type_location_1">
            <input
              className="inputLocation"
              id="userLocation"
              type="text"
              name="userLocation"
              required={true}
              placeholder="Warsaw"
              value={userData.userLocation}
              onChange={handleChange}
            ></input>
          </div>
          <div className="user_details_type" id="user_details_type_location_2">
            location
          </div>
        </div>

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
              value={userData.userRangeStart}
              onChange={handleChange}
            ></input>
            <div className="rangeMinus">-</div>
            <input
              className="inputRange"
              type="number"
              name="userRangeEnd"
              placeholder="22"
              value={userData.userRangeEnd}
              onChange={handleChange}
            ></input>
          </div>
        </div>
      </div>

      <div className="description_profile_row">
        <div className="description_profile_title">description</div>
        <textarea
          className="description_rowUser"
          id="description_rowUser_main_profile"
          name="userDescription"
          type="text"
          placeholder="Something about you"
          value={userData.description}
          onChange={handleChange}
        >
          {/* {description} */}
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
