import React from "react";

import { Redirect, useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";

import EventList from "../components/EventList";

import { GET_USER, QUERY_ME} from "../utils/queries";
import { GET_DOG, QUERRY_ME } from "../utils/queries";
import Auth from "../utils/auth";
import { ADD_EVENT } from "../utils/mutations";

const Profile = () => {
  const { username: userParam } = useParams();

  
  const { loading, data } = useQuery(userParam ? GET_USER : QUERY_ME, {
    variables: { username: userParam},
  });

  const user = data?.me || data?.user || data?.dog || {};





  // const {id: useParams} = useParams();



  // const id = data?.me || data?.id || {};





  return (
    <div>
      <div>I am the profile page!</div>

      <div>
        <h2>Viewing {userParam ? `${user.username}'s` : "your"} profile.</h2>
        {/* <h2>Dog: {userParam ? `${dog.name}` : "lol" }</h2> */}

        {userParam && <button>Add Event</button>}
      </div>



       <div>

      

      </div>


    </div>

 


  );
};

export default Profile;
