import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import axios from "axios";

const UploadPhotos = ({ user, isActive, handleClickShow }) => {
  const [image, setImage] = useState(null);

  const convertToBase64 = (e) => {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.onerror = (error) => {
      console.log("Error: ", error);
    };
  };

  const uploadPhoto = async () => {
    try {
      const response = await axios.put("http://localhost:8000/uploadphoto", {
        user_id: user.user_id,
        img: image,
      });
      console.log(response);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const deletePhoto = async (img) => {
    try {
      const response = await axios.put("http://localhost:8000/deletephoto", {
        user_id: user.user_id,
        img: img,
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      id="upload_photos"
      style={{
        zIndex: isActive ? 3 : 0,
      }}
    >
      {/* tytuł */}
      <div className="chatHeader">
        <button className="closeWindow_button" onClick={handleClickShow}>
          <FaTimes id="closeWindow" />
        </button>
      </div>
      {/* srodek */}
      <div id="upload_photo_table"></div>
      {user.images.length > 0 ? (
        <>
          {user.images?.map((image) => (
            <button
              className="uploadedPhotos_button"
              onClick={(e) => deletePhoto(image)}
            >
              <img src={image} alt="img" className="avatarUploaded" />
            </button>
          ))}
        </>
      ) : (
        <span id="dontHavePhotosSpan">You don't have any photos yet</span>
      )}
      {/* dolna_strona */}
      <div id="upload_photo_buttons">
        <label for="files" className="upload_button">
          Select Image
        </label>
        <input type="file" id="files" onChange={convertToBase64} />
        <img id="uploadPhoto_previewImg" src={image} />
        <button
          className="upload_button"
          id="saveUpdatedPhotos_button"
          onClick={uploadPhoto}
        >
          Save
        </button>
      </div>

      {/* <label for="files" className="btn">
              Select Image
            </label>
            <input type="file" id="files" onChange={convertToBase64} />
            {image == "" || image == null ? (
              ""
            ) : (
              <img id="eventDetails_mapIMG" src={image} />
            )} */}
    </div>
  );
};

export default UploadPhotos;
