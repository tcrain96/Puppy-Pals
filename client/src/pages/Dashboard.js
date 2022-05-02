import React, { useState } from "react";
import EventList from "../components/EventList";

import { useQuery, useMutation } from "@apollo/client";
import { GET_EVENTS, QUERY_ME_BASIC } from "../utils/queries";
import { ADD_EVENT } from "../utils/mutations";
import "./css/Dashboard.css";

const Dashboard = () => {
  const { loading, data } = useQuery(GET_EVENTS);
  const { data: userData } = useQuery(QUERY_ME_BASIC);

  const events = data?.events || [];

  const [addEvent, { error }] = useMutation(ADD_EVENT);

  const [formState, setFormState] = useState({
    date: "",
    time: "",
    location: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const handleClickEvent = (event) => {
    if (event.target.className === "add-event-button") {
      event.target.style.display = "none";
      document.querySelector(".add-event-form").style.display = "flex";
    } else if (event.target.className === "add-event-back-button") {
      document.querySelector(".add-event-form").style.display = "none";
      document.querySelector(".add-event-button").style.display = "block";
    }
  };

  const handleFormSubmit = async (event) => {
    try {
      await addEvent({
        variables: {
          userId: userData.me._id,
          ...formState,
        },
      });
    } catch (e) {
      console.error(e);
    }
    document.querySelector(".add-event-form").style.display = "none";
    document.querySelector(".add-event-button").style.display = "block";

    setFormState({
      date: "",
      time: "",
      location: "",
    });
  };
  return (
    <section className="dashboard-section">
      <form className="add-event-form" style={{ display: "none" }}>
        <article>
          <input
            className="form-input"
            placeholder="Date"
            name="date"
            type="date"
            id="date"
            onChange={handleChange}
          />
          <input
            className="form-input"
            placeholder="Time"
            name="time"
            type="time"
            id="time"
            onChange={handleChange}
          />
          <input
            className="form-input"
            placeholder="Address"
            name="location"
            type="text"
            id="location"
            onChange={handleChange}
          />
        </article>

        <article className="add-event-buttons">
          <button type="submit" onClick={handleFormSubmit}>
            Add Event
          </button>
          <p className="add-event-back-button" onClick={handleClickEvent}>
            Back
          </p>
        </article>
      </form>

      <p className="add-event-button" onClick={handleClickEvent}>
        Add Event
      </p>
      <EventList events={events} />
    </section>
  );
};

export default Dashboard;
