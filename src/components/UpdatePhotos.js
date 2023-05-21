import { FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import Profile from "./Profile";

const UpdatePhotos = () => {
  const [image, setImage] = useState(null);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <div>
      <input type="file" onChange={onImageChange} className="filetype" />
      <img alt="preview image" src={image} />
    </div>
  );
};

export default UpdatePhotos;
