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
    </div>
  );
};

export default CreateEvents;
