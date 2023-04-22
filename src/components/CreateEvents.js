const CreateEvents = () => {
  return (
    <div className="createEventContainer bg_rectangle">
      <input
        id="createTitleEvent"
        type="text"
        placeholder="TITLE OF EVENT"
        required={true}
        //   onChange={(e) => setLocation(e.target.value)}
      ></input>
      <div className="eventDetails">
        <div className="eventDetailsLabels">
          <span>distance:</span>
          <span>average pace:</span>
          <span>surface:</span>
        </div>
        <div className="eventDetailsInputs">
          <input
            type="number"
            placeholder="60"
            required={true}
            //   onChange={(e) => setLocation(e.target.value)}
          ></input>
          <input
            type="number"
            placeholder="20"
            required={true}
            //   onChange={(e) => setLocation(e.target.value)}
          ></input>
          <input
            type="text"
            placeholder="road"
            required={true}
            //   onChange={(e) => setLocation(e.target.value)}
          ></input>
        </div>
      </div>
      <textarea
        id="createEventDescription"
        type="text"
        placeholder="A few words about event"
      ></textarea>
      <div className="locationDateSurfaceLabels">start location:</div>
      <input
        className="locationDateSurfaceInputs"
        type="text"
        placeholder="Poznań, Most Teatralny"
        required={true}
        //   onChange={(e) => setLocation(e.target.value)}
      ></input>
      <div className="locationDateSurfaceLabels">start date:</div>
      <input
        className="locationDateSurfaceInputs"
        type="text"
        placeholder="2023.04.20 5:30pm"
        required={true}
        //   onChange={(e) => setLocation(e.target.value)}
      ></input>
      <div className="locationDateSurfaceLabels">status:</div>
      <button id="createEvent_button">CREATE EVENT</button>
    </div>
  );
};

export default CreateEvents;
