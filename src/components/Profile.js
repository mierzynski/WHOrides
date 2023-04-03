import { FaUser } from "react-icons/fa";
import { useState } from "react";

const Profile = () => {

    const [description, setDescripton] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    
    console.log(description);

    const handleClick = () => {
        setIsClicked((current) => !current);
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

    //   const saveChanges = (value) => {
    //     return (
            
    //     )
    //   }

    //   const saveChangesBtn = (value) =>
    // {
    //     return(
    //         <button className={isClicked ? "clickedButtontype" : "notClickedButtonType"}
    //         onClick={saveChanges}
    //         >
    //             {value}
    //         </button>
    //     );
    // }

    return (
        <div className="bg_rectangle">

            <div className="photos_profile_row">
                <FaUser className="userFa avatar_rowUser profile_avatar" />
                <FaUser className="userFa avatar_rowUser profile_avatar" id="profile_main_avatar"/> 
                <button className=""id="upload_photo">UPLOAD PHOTO</button>
                <FaUser className="userFa avatar_rowUser profile_avatar" />
            </div>

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
                        <input className="inputRange" type="number" placeholder="22"></input>
                        <div className="rangeMinus">-</div>
                        <input className="inputRange" type="number" placeholder="22"></input>
                    </div>
                </div>


                <div id="collumn_data_profile_center">  
                <div className="user_details">Mati</div>
                <div className="user_details_type">name</div>
                <div className="user_details">24</div>
                <div className="user_details_type">age</div>
                <div className="user_details">Poznan</div>
                <div className="user_details_type">location</div>
                
                </div>


                <div id="collumn_data_profile_right">
                    <div className="titleOfFilter title_details_right">surface types</div>
                    <div className="clicableTypes">
                        {buttonTypes("mixed")}
                        {buttonTypes("forest")}
                        {buttonTypes("road")}
                    </div>
                    <div className="titleOfFilter title_details_right">distance range</div>
                    <div className="rangeFilter">
                        <input className="inputRange" type="number" placeholder="22"></input>
                        <div className="rangeMinus">-</div>
                        <input className="inputRange" type="number" placeholder="22"></input>
                    </div>

                </div>
            </div>

            <div className="description_profile_row">
                <div className="description_profile_title">description</div>
                <textarea className="description_rowUser" id="decription_rowUser_main_profile" onChange={(e) => setDescripton(e.target.value)}/>
            </div>

            <div className="edit_details_button">
                <button className="button_curved" id="save_changes_profile">SAVE CHANGES</button>
            </div>
      </div>

    )
}
export default Profile