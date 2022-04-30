import React from "react";

import { Redirect, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';


import EventList from "../components/EventList";

import { GET_USER, GET_USERS } from '../utils/queries';
import Auth from '../utils/auth';
import { ADD_EVENT } from "../utils/mutations";


const Profile = () => {

  const { username: userParam } = useParams();

 const [addEvent] = useMutation(ADD_EVENT);
  const { loading, data } = useQuery(userParam ? GET_USER : GET_USERS, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

// redirect to personal profile page if username is yours
if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
  return <Redirect to="/profile" />;
}

if (loading) {
  return <div>Loading...</div>;
}

if (!user?.username) {
  return (
    <h4>
      You need to be logged in to see this. Use the navigation links above to
      sign up or log in!
    </h4>
  );
}


const handleClick = async () => {
  try {
    await addEvent({
      variables: { id: user._id },
    });
  } catch (e) {
    console.error(e);
  }
};



  return (
    <div className="flex-row justify-space-between">
      <div className="col-12 mb-3">I am the profile page!</div>

      <div className="flex-row mb-3">
        <h2 className="bg-dark text-secondary p-3 display-inline-block">
          Viewing {userParam ? `${user.username}'s` : 'your'} profile.
        </h2>

        {userParam && (
          <button className="btn ml-auto" onClick={handleClick}>
            Add Event
          </button>
        )}
      </div>


      <div className="flex-row justify-space-between mb-3">
        <div className="col-12 mb-3 col-lg-8">
          <EventList
            events={user.events}
            title={`${user.username}'s Events...`}
          />
        </div>

        
      </div>
     
    </div>
  );
};

export default Profile;
