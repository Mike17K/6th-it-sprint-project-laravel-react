import React from "react";
import { Link } from "react-router-dom";

const EventSelectionPage = async () => {
  // fetch call for geting the list of events
  // fetch here

  const res = await fetch("http://localhost:8000/api/events").then((data) =>
    data.json()
  );
  console.log(res);

  const eestecEventList = [
    { id: 0, name: "event 1" },
    { id: 1, name: "event 2" },
    { id: 2, name: "event 3" },
  ];

  function deleteEvent(eestecEventId) {
    // make fetch request for deleting an event of id of eestecEventId, by user of id: this users id
  }

  return (
    <div>
      <h4>EventSelectionPage</h4>
      <ul className="event-list">
        {eestecEventList.map((eestecEvent, index) => (
          <div>
            <li key={eestecEvent.id}>{eestecEvent.name}</li>

            <Link to={"/events/" + eestecEvent.id}>Evaluate Applications</Link>

            <button onClick={() => deleteEvent(eestecEvent.id)}>
              Delete Event
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default EventSelectionPage;
