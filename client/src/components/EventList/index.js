import React from "react";
import "./index.css";
import { useQuery } from "@apollo/client";
import { GET_USER } from "../../utils/queries";
import UserData from "../UserData";

const EventList = ({ events }) => {
  if (!events.length) {
    return <h3>No Events Yet</h3>;
  }

  return (
    <section className="event-list-section">
      {events &&
        events
          .map((event) => (
            <article key={event._id}>
              <UserData userId={event.userId} />
              <p>{event.date}</p>
              <p>{event.time}</p>
              <p>{event.location}</p>
            </article>
          ))
          .reverse()}
    </section>
  );
};

export default EventList;
