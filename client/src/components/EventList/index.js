import React from "react";

const EventList = ({ events }) => {
  if (!events.length) {
    return <h3>No Events Yet</h3>;
  }

  return (
    <section>
      {events &&
        events.map((event) => (
          <article key="event._id">
            <p>{event.date}</p>
            <p>{event.time}</p>
            <p>{event.location}</p>
          </article>
        ))}
    </section>
  );
};

export default EventList;
