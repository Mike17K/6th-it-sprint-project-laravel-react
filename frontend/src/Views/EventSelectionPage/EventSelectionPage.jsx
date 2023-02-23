import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./EventSelectionPage.css";

const EventSelectionPage = () => {
  // fetch call for geting the list of events
  // fetch here
  const [eestecEventList, setData] = useState([]);

  async function load() {
    await fetch("http://localhost:8000/api/events")
      .then((data) => data.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }

  load();

  /*
  setData(
    [
    { id: 0, name: "event 1" },
    { id: 1, name: "event 2" },
    { id: 2, name: "event 3" },
  ]);
*/

  function deleteEvent(eestecEventId) {
    // make fetch request for deleting an event of id of eestecEventId, by user of id: this users id
  }

  return (
    <div>
      <h4>EventSelectionPage</h4>
      <ul className="event-list">
        {eestecEventList.map((eestecEvent, index) => (
          <div className="rotate">
            <li key={eestecEvent.id}>{eestecEvent.name} </li>

            <Link to={"/events/" + eestecEvent.id}>Evaluate Applications</Link>

            <button onClick={() => deleteEvent(eestecEvent.id)} className="but">
              Delete Event
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default EventSelectionPage;
