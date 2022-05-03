import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ME_BASIC } from "../../utils/queries";
import { ADD_EVENT } from "../../utils/mutations";
import "./index.css";
const AddEventForm = () => {
  const [addEvent, { error }] = useMutation(ADD_EVENT);
  const { data: userData } = useQuery(QUERY_ME_BASIC);

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
    <section className="add-event-form-section">
      <form
        onSubmit={handleFormSubmit}
        className="add-event-form"
        style={{ display: "none" }}
      >
        <article>
          <input
            className="form-input"
            placeholder="Date"
            name="date"
            type="date"
            id="date"
            onChange={handleChange}
            required="true"
          />
          <input
            className="form-input"
            placeholder="Time"
            name="time"
            type="time"
            id="time"
            onChange={handleChange}
            required="true"
          />
          <input
            className="form-input"
            placeholder="Address"
            name="location"
            type="text"
            id="location"
            onChange={handleChange}
            required="true"
          />
        </article>

        <article className="add-event-buttons">
          <button type="submit">Add Event</button>
          <p className="add-event-back-button" onClick={handleClickEvent}>
            Back
          </p>
        </article>
      </form>

      <p className="add-event-button" onClick={handleClickEvent}>
        Add Event
      </p>
    </section>
  );
};

export default AddEventForm;
