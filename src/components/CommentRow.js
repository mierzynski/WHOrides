import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";

const CommentRow = () => {
  return (
    <div className="commentBg">
      <div className="commentAuthor">JAREK</div>
      <div className="starsRate">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalf />
      </div>
      <div className="commentsContent">Polecam tego allegrowicza!</div>
      <div className="commentDate">01.04.2023</div>
    </div>
  );
};
export default CommentRow;
