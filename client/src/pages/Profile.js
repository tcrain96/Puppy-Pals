import React from "react";

import { useQuery, useMutation } from "@apollo/client";

import { QUERY_ME } from "../utils/queries";
import "./css/Profile.css";
import { DELETE_DOG, DELETE_EVENT } from "../utils/mutations";
import AddEventForm from "../components/AddEventForm";
import AddDogForm from "../components/AddDogForm";
const Profile = () => {
  const { loading, data } = useQuery(QUERY_ME);
  const [deleteDog] = useMutation(DELETE_DOG);
  const [deleteEvent] = useMutation(DELETE_EVENT);

  const deleteEventEvent = async (eventId) => {
    try {
      await deleteEvent({
        variables: { id: eventId },
      });
    } catch (e) {
      console.error(e);
    }
  };
  const deleteDogEvent = async (dogId) => {
    try {
      await deleteDog({
        variables: { id: dogId },
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section>
      {data && (
        <article className="profile-section">
          <AddEventForm />
          <AddDogForm />
          <div>
            <h2>{data.me.username}</h2>
            <p className="email">{data.me.email}</p>
          </div>

          <div>
            <h2>My Dogs</h2>
            {data.me.dogs.length > 0 ? (
              data.me.dogs.map((dog) => (
                <article key={dog._id}>
                  <h2>{dog.name}</h2>
                  <p>{dog.age}</p>
                  <p>{dog.gender}</p>
                  <p>{dog.description}</p>
                  <article className="profile-buttons">
                    <form onSubmit={deleteDogEvent(dog._id)}>
                      <button type="submit">Remove</button>
                    </form>
                  </article>
                </article>
              ))
            ) : (
              <p className="empty-dog-text">You currently have no dogs!</p>
            )}
          </div>
          <div>
            <h2>My Events</h2>

            {data.me.events.length > 0 ? (
              data.me.events.map((event) => (
                <article key={event._id}>
                  <p>
                    <span>Date: </span>
                    {event.date}
                  </p>
                  <p>
                    <span>Time: </span>
                    {event.time}
                  </p>
                  <p>
                    <span>Location: </span>
                    {event.location}
                  </p>
                  <article className="profile-buttons">
                    <form onSubmit={deleteEventEvent(event._id)}>
                      <button type="submit">Remove</button>
                    </form>
                  </article>
                </article>
              ))
            ) : (
              <p className="empty-event-text">
                You currently have no events scheduled!
              </p>
            )}
          </div>
        </article>
      )}
    </section>
  );
};

export default Profile;
