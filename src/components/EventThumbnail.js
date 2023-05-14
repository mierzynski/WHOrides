import { useState } from "react";
import axios from "axios";

const EventThumbnail = ({ detailsObj, newFilters, handleClickEvent }) => {
  const [events, setEvents] = useState();
  const [filters, setFilters] = useState();

  const getEvents = async () => {
    try {
      const response = await axios.get("http://localhost:8000/findevents", {
        params: { filters: newFilters },
      });
      setEvents(response.data);
      setFilters(newFilters);
    } catch (error) {
      console.log(error);
    }
  };

  if (newFilters && newFilters != filters) {
    getEvents();
  }

  if (detailsObj) {
    return (
      <button className="bgEventThumbnail bg_rectangle">
        <div className="eventThumbnailTitle">{detailsObj.title}</div>
        <div className="eventThumbnailDetailRow">
          <span className="eventThumbnailLabels">distance:</span>
          <span className="eventThumbnailDetail">{detailsObj.distance} km</span>
        </div>
        <div className="eventThumbnailDetailRow">
          <span className="eventThumbnailLabels">avg pace:</span>
          <span className="eventThumbnailDetail">
            {detailsObj.avg_pace} km/h
          </span>
        </div>
        <div className="eventThumbnailDetailRow">
          <span className="eventThumbnailLabels">surface:</span>
          <span className="eventThumbnailDetail">{detailsObj.surface}</span>
        </div>
        <span className="eventThumbnailLabels">location:</span>
        <span className="eventThumbnailDetail">{detailsObj.location}</span>
        <div className="eventThumbnailsDescription">
          {detailsObj.description}
        </div>
        <div className="eventThumbnailDetail bottomDateEventThumbnail">
          {detailsObj.meeting_date}
        </div>
      </button>
    );
  }

  return (
    <>
      {events?.map((event) => (
        <button
          className="bgEventThumbnail bg_rectangle"
          key={event._id}
          onClick={(e) => handleClickEvent(event)}
        >
          <div className="eventThumbnailTitle">{event.title}</div>
          <div className="eventThumbnailDetailRow">
            <span className="eventThumbnailLabels">distance:</span>
            <span className="eventThumbnailDetail">{event.distance} km</span>
          </div>
          <div className="eventThumbnailDetailRow">
            <span className="eventThumbnailLabels">avg pace:</span>
            <span className="eventThumbnailDetail">{event.avg_pace} km/h</span>
          </div>
          <div className="eventThumbnailDetailRow">
            <span className="eventThumbnailLabels">surface:</span>
            <span className="eventThumbnailDetail">{event.surface}</span>
          </div>
          <span className="eventThumbnailLabels">location:</span>
          <span className="eventThumbnailDetail">{event.location}</span>
          <div className="eventThumbnailsDescription">{event.description}</div>
          <div className="eventThumbnailDetail bottomDateEventThumbnail">
            {event.meeting_date}
          </div>
        </button>
      ))}
    </>
  );
};
export default EventThumbnail;
