import React, {useState} from "react";
import {useMutation} from "@apollo/client"
import { UPDATE_EVENT } from "../../utils/mutations";
import "./index.css";

const UpdateEventForm = ({eventId}) => {

    const [updateEvent] = useMutation(UPDATE_EVENT);

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

    const handleClickEvent = () => {
          document.querySelector("#profile-event-info-" + eventId).style.display = "block";
          document.querySelector("#profile-event-info-form-" + eventId).style.display = "none";
          document.querySelector("#update-event-form-element" + eventId).reset();
      };

      const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
          await updateEvent({
            variables: {
              id: eventId,
              ...formState,
            },
          });
        } catch (e) {
          console.error(e);
        }

        document.querySelector("#profile-event-info-" + eventId).style.display = "block";
        document.querySelector("#profile-event-info-form-" + eventId).style.display = "none";
        document.querySelector("#update-event-form-element" + eventId).reset();
        
        setFormState({
          date: "",
          time: "",
          location: "",
        });
      };

  return (
    <section key={"update-event-form-" + eventId} className="update-event-form-section" id={"profile-event-info-form-" + eventId} style={{ display: "none" }}>
      <form
      onSubmit={handleFormSubmit}
        className="update-event-form"
        id={"update-event-form-element" + eventId}
      >
        <article>
          <input
            className="form-input"
            placeholder="Date"
            name="date"
            type="date"
            id="date"
            required="true"
            onChange={handleChange}
            
          />
          <input
            className="form-input"
            placeholder="Time"
            name="time"
            type="time"
            id="time"
            required="true"
            onChange={handleChange}
            
 
          />
          <input
            className="form-input"
            placeholder="Address"
            name="location"
            type="input"
            id="location"
            required="true"
            onChange={handleChange}
            
 
          />
          <article className="update-buttons">
          <button type="submit">Update Event</button>
          <p className="add-dog-event-button" onClick={handleClickEvent}>
            Back
          </p>
          </article>
          
        </article>
      </form>
    </section>
  );
};

export default UpdateEventForm;
