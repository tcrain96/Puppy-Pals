import React from "react";

import { useQuery, useMutation } from "@apollo/client";

import { QUERY_ME } from "../utils/queries";
import "./css/Profile.css";
import { DELETE_DOG } from "../utils/mutations";

const Profile = () => {
  const { loading, data } = useQuery(QUERY_ME);
  const [deleteDog, { error }] = useMutation(DELETE_DOG);

  const deleteDogEvent = async (dogId) => {
    try {
      await deleteDog({
        variables: {
          _id: dogId,
        },
      });
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <section>
      {data && (
        <article className="profile-section">
          <div>
            <h2>{data.me.username}</h2>
            <p className="email">{data.me.email}</p>
          </div>
          <div>
            {data.me.dogs.length > 0 && <h2>My Dogs</h2>}
            {data.me.dogs.length > 0 &&
              data.me.dogs.map((dog) => (
                <article key={dog._id}>
                  <h2>{dog.name}</h2>
                  <p>{dog.age}</p>
                  <p>{dog.gender}</p>
                  <p>{dog.description}</p>
                  <article className="profile-buttons"></article>
                </article>
              ))}
          </div>
          <div>
            {data.me.events.length > 0 && <h2>My Events</h2>}
            {data.me.events.length > 0 &&
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
                </article>
              ))}
          </div>
        </article>
      )}
    </section>
  );
};

export default Profile;
