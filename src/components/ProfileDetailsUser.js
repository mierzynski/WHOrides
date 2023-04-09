import CommentRow from "./CommentRow";
import PhotoUserDetailsFind from "./PhotoUserDetailsFind";

const ProfileDetailsUser = (props) => {
  const user = props.user;
  const currentYear = new Date().getFullYear();
  return (
    <div className="profile_details bg_rectangle">
      <div id="photos_profile">
        <PhotoUserDetailsFind />
        <PhotoUserDetailsFind />
        <PhotoUserDetailsFind />
        <PhotoUserDetailsFind />
      </div>
      <div id="detailsAndComments">
        <div id="detailsType">
          <span>name:</span>
          <span>age:</span>
          <span>location:</span>
          <span>avg pace:</span>
          <span>distance range:</span>
        </div>
        <div id="detailsData">
          <span>{user.name}</span>
          <span>{currentYear - user.birth_year}</span>
          <span>{user.location}</span>
          <span>18-22km/h</span>
          <span>30-60km</span>
        </div>
        <div id="commentsInProfileDetails">
          <span>comments</span>
          <div id="commentsHole">
            {user.comments?.map((comment) => (
              <CommentRow comment={comment} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileDetailsUser;
