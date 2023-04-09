import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";

const CommentRow = (props) => {
  let authorData = props.comment;
  return (
    <div className="commentBg">
      <div className="commentAuthor">{authorData.name}</div>
      <div className="starsRate">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalf />
      </div>
      <div className="commentsContent">{authorData.comment}</div>
      <div className="commentDate">authorData.date</div>
    </div>
  );
};
export default CommentRow;
