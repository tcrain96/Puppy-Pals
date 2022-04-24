import { useQuery } from "@apollo/client";
import { GET_USERS } from "../utils/queries";
import React from "react";

const Home = () => {
  const { loading, data } = useQuery(GET_USERS);
  console.log(data?.users);
  return (
    <main>
      <div className="flex-row justify-space-between">
        <div className="col-12 mb-3"></div>
      </div>
    </main>
  );
};

export default Home;
