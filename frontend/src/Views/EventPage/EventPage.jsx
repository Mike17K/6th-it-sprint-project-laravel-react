import React from "react";
import "./EventPage.css";
import { Link, useParams } from "react-router-dom";

function EventPage() {
  const { eventId } = useParams();

  // fetch here for the aplications of the event with id of eventId, only those who are beening authorized for this evaluator user
  // fetch for info about the event like: name , stats ...
  const eventName = "Event - " + eventId;
  const aplications = [
    { id: 0, name: "application - 0" },
    { id: 1, name: "application - 1" },
    { id: 2, name: "application - 2" },
    { id: 3, name: "application - 3" },
    { id: 4, name: "application - 4" },
    { id: 5, name: "application - 5" },
    { id: 6, name: "application - 6" },
    { id: 7, name: "application - 7" },
    { id: 8, name: "application - 8" },
  ];

  function deleteApplication(eestecApplicationId) {
    // make fetch request for deleting an application of id of eestecEventId, by user of id: this users id , and event send also the name
  }

  return (
    <div>
      <h4>{eventName}</h4>
      <ul className="event-list">
        {aplications.map((aplication, index) => (
          <div>
            <li key={aplication.id}>{aplication.name}</li>

            <Link to={"/events/" + eventId + "/" + aplication.id}>
              Evaluate Application
            </Link>

            <button onClick={() => deleteApplication(aplication.id)}>
              Delete Application
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default EventPage;
