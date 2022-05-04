import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ME_BASIC } from "../../utils/queries";
import { ADD_DOG } from "../../utils/mutations";
import "./index.css";
const AddDogForm = () => {
  const [addDog] = useMutation(ADD_DOG);
  const { data: userData } = useQuery(QUERY_ME_BASIC);

  const [formState, setFormState] = useState({
    name: "",
    age: "",
    gender: "",
    description: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleClickEvent = (event) => {
    if (event.target.className === "add-dog-button") {
      event.target.style.display = "none";
      document.querySelector(".add-dog-form").style.display = "flex";
    } else if (event.target.className === "add-dog-back-button") {
      document.querySelector(".add-dog-form").style.display = "none";
      document.querySelector(".add-dog-button").style.display = "block";
    }
  };

  const handleFormSubmit = async () => {
    try {
      await addDog({
        variables: {
          userId: userData.me._id,
          ...formState,
        },
      });
    } catch (e) {
      console.error(e);
    }
    document.querySelector(".add-dog-form").style.display = "none";
    document.querySelector(".add-dog-button").style.display = "block";

    setFormState({
      name: "",
      age: "",
      gender: "",
      description: "",
    });
  };

  return (
    <section className="add-dog-form-section">
      <form
        onSubmit={handleFormSubmit}
        className="add-dog-form"
        style={{ display: "none" }}
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
        </article>

        <article className="add-dog-buttons">
          <button type="submit">Add Dog</button>
          <p className="add-dog-back-button" onClick={handleClickEvent}>
            Back
          </p>
        </article>
      </form>

      <p className="add-dog-button" onClick={handleClickEvent}>
        Add Dog 🐶
      </p>
    </section>
  );
};

export default AddDogForm;
