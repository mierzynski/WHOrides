const EventThumbnail = (detailsArray) => {
  const details = detailsArray.detailsArray;
  console.log(details);

  return (
    <div className="bgEventThumbnail bg_rectangle">
      <div className="eventThumbnailTitle">{details[0]}</div>
      <div className="eventThumbnailDetailRow">
        <span className="eventThumbnailLabels">distance:</span>
        <span className="eventThumbnailDetail">{details[1]} km</span>
      </div>
      <div className="eventThumbnailDetailRow">
        <span className="eventThumbnailLabels">avg pace:</span>
        <span className="eventThumbnailDetail">{details[2]} km/h</span>
      </div>
      <div className="eventThumbnailDetailRow">
        <span className="eventThumbnailLabels">surface:</span>
        <span className="eventThumbnailDetail">{details[3]}</span>
      </div>
      <span className="eventThumbnailLabels">location:</span>
      <span className="eventThumbnailDetail">{details[4]}</span>
      <div className="eventThumbnailsDescription">{details[5]}</div>
      <div className="eventThumbnailDetail bottomDateEventThumbnail">
        {details[6]}
      </div>
    </div>
  );
};
export default EventThumbnail;
