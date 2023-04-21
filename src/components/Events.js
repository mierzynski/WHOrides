import { useState } from "react";
import SearchEvents from "./SearchEvents";
import CreateEvents from "./CreateEvents";

const Events = () => {
  const [searchEvents, setSearchEvents] = useState(true);
  const [createEvents, setCreateEvents] = useState(false);

  const handleSearchOrCreateButton = () => {
    setSearchEvents((searchEvents) => !searchEvents);
    setCreateEvents((createEvents) => !createEvents);
  };

  return (
    <>
      <div className="searchOrCreateEvents_bg bg_rectangle">
        <button
          className={
            searchEvents
              ? "searchOrCreate_buttonClicked"
              : "searchOrCreate_button"
          }
          onClick={handleSearchOrCreateButton}
        >
          SEARCH EVENT
        </button>
        <button
          className={
            createEvents
              ? "searchOrCreate_buttonClicked"
              : "searchOrCreate_button"
          }
          onClick={handleSearchOrCreateButton}
        >
          CREATE EVENT
        </button>
      </div>

      <div className="eventsContainer">
        {searchEvents ? <SearchEvents /> : <CreateEvents />}
      </div>
    </>
  );
};

export default Events;
