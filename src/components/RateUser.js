import { useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import Ratings from "react-ratings-declarative";

const RateUser = (ratedUserId) => {
  const [rating, setRating] = useState();
  const [comment, setComment] = useState();
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const userId = cookies.UserId;
  const userName = cookies.UserName;

  const changeRating = (newRating) => {
    setRating(newRating);
  };

  const createComment = async () => {
    const newComment = {
      user_id: userId,
      name: userName,
      comment: comment,
      rate: rating,
      date: new Date().toISOString(),
    };

    try {
      const response = await axios.put("http://localhost:8000/createcomment", {
        newComment,
        ratedUserId,
      });
      if (response.data == "Done") {
        window.location.reload();
      } else if (response.data == "Comment already exist") {
        alert("Comment already exist");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="commentBg bg_rectangle">
      <Ratings
        rating={rating}
        widgetDimensions="20px"
        widgetSpacings="1px"
        changeRating={changeRating}
        widgetRatedColors="black"
        widgetHoverColors="black"
      >
        <Ratings.Widget />
        <Ratings.Widget />
        <Ratings.Widget />
        <Ratings.Widget />
        <Ratings.Widget />
      </Ratings>
      <textarea
        id="textAreaComment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button className="confirmComment_button" onClick={createComment}>
        confirm
      </button>
    </div>
  );
};
export default RateUser;
