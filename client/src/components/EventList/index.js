import React from "react";
import "./index.css";
import UserData from "../UserData";

const EventList = ({ events }) => {
  if (!events.length) {
    return <h3 className="no-event-yet">No Events Yet</h3>;
  }

  return (
    <section className="event-list-section">
      {events &&
        events
          .map((event) => (
            <article key={event._id}>
              <UserData userId={event.userId} />
              <h3>Details</h3>
              <p>
                <span>Date:</span> {event.date}
              </p>
              <p>
                <span>Time:</span> {event.time}
              </p>
              <p>
                <span>Location:</span> {event.location}
              </p>
            </article>
          ))
          .reverse()}
    </section>
  );
};

export default EventList;
