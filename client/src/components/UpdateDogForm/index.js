import React, {useState} from "react";
import {useMutation} from "@apollo/client"
import { UPDATE_DOG } from "../../utils/mutations";
import "./index.css";

const UpdateDogForm = ({dogId}) => {

    const [updateDog] = useMutation(UPDATE_DOG);

    const [formState, setFormState] = useState({
      name: "",
      age: "",
      gender: "",
      description:""
    });

    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };

    const handleClickEvent = () => {
          document.querySelector("#profile-dog-info-" + dogId).style.display = "block";
          document.querySelector("#profile-dog-info-form-" + dogId).style.display = "none";
      };

      const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
          await updateDog({
            variables: {
              id: dogId,
              ...formState,
            },
          });
        } catch (e) {
          console.error(e);
        }

        document.querySelector("#profile-dog-info-" + dogId).style.display = "block";
        document.querySelector("#profile-dog-info-form-" + dogId).style.display = "none";
    
        setFormState({
          name: "",
          age: "",
          gender: "",
          description:""
        });
      };

  return (
    <section key={"update-dog-form-" + dogId} className="update-dog-form-section" id={"profile-dog-info-form-" + dogId} style={{ display: "none" }}>
      <form
      onSubmit={handleFormSubmit}
        className="update-dog-form"
      >
        <article>
          <input
            className="form-input"
            placeholder="Name"
            name="name"
            type="input"
            id="name"
            onChange={handleChange}
            required="true"
          />
          <input
            className="form-input"
            placeholder="Age"
            name="age"
            type="input"
            id="age"
            onChange={handleChange}
            required="true"
 
          />
          <input
            className="form-input"
            placeholder="Gender"
            name="gender"
            type="input"
            id="gender"
            onChange={handleChange}
            required="true"
 
          />
          <input
            className="form-input"
            placeholder="Description"
            name="description"
            type="input"
            id="description"
            onChange={handleChange}
            required="true"

          />
          <article className="update-buttons">
          <button type="submit">Update Dog</button>
          <p className="add-dog-back-button" onClick={handleClickEvent}>
            Back
          </p>
          </article>
          
        </article>
      </form>
    </section>
  );
};

export default UpdateDogForm;
