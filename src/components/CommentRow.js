import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import Ratings from "react-ratings-declarative";

const CommentRow = (props) => {
  let authorData = props.comment;
  return (
    <div className="commentBg">
      <div className="commentAuthor">{authorData.name}</div>
      <div className="starsRate">
        <Ratings
          rating={authorData.rate}
          widgetDimensions="10px"
          widgetSpacings="0px"
          widgetRatedColors="black"
          widgetHoverColors="black"
        >
          <Ratings.Widget />
          <Ratings.Widget />
          <Ratings.Widget />
          <Ratings.Widget />
          <Ratings.Widget />
        </Ratings>
      </div>
      <div className="commentsContent">{authorData.comment}</div>
      <div className="commentDate">{authorData.date.substring(0, 10)}</div>
    </div>
  );
};
export default CommentRow;
