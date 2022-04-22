import { useQuery } from "@apollo/client";
import { QUERIES } from "../utils/queries";
import React from "react";

const Home = () => {
  const { loading, data } = useQuery(QUERIES.GET_USERS);
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
