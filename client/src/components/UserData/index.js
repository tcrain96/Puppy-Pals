import React from "react";
import { useQuery } from "@apollo/client";
import { GET_USER } from "../../utils/queries";

const UserData = ({ userId }) => {
  const { data } = useQuery(GET_USER, { variables: { id: userId } });

  return (
    <section className="user-infomation-section">
      {data && (
        <>
          <h2>{data.user.username}</h2>
          {data.user.dogs.length > 0 && <h3>{data.user.username}'s dogs</h3>}

          {data.user.dogs.length > 0 &&
            data.user.dogs.map((dog) => <p key={dog._id}>{dog.name}</p>)}
        </>
      )}
    </section>
  );
};

export default UserData;
