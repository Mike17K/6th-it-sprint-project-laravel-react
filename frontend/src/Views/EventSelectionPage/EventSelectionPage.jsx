import React from "react";

const EventSelectionPage = () => {
  // fetch call for geting the list of events
  // fetch here
  const eestecEventList = [
    { id: 0, name: "event 1" },
    { id: 1, name: "event 2" },
    { id: 2, name: "event 3" },
  ];

  return (
    <div>
      <h4>EventSelectionPage</h4>
      <ul className="event-list">
        {eestecEventList.map((eestecEvent, index) => (
          <div>
            <li key={eestecEvent.id}>{eestecEvent.name}</li>

            <button onClick={() => {}}>Evaluate Applications</button>
            <button onClick={() => {}}>Delete Event</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default EventSelectionPage;
