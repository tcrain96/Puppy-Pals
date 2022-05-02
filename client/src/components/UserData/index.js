import React from "react";
import { useQuery } from "@apollo/client";
import { GET_USER } from "../../utils/queries";

const UserData = ({ userId }) => {
  const { loading, data } = useQuery(GET_USER, { variables: { id: userId } });

  return <section>{data && <p>{data.user.username}</p>}</section>;
};

export default UserData;
