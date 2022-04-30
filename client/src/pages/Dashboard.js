import React from "react";
import EventList from "../components/EventList";

import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { GET_EVENTS } from "../utils/queries";

const Dashboard = () => {
  const { loading, data } = useQuery(GET_EVENTS);
  const events = data?.events || [];

  const loggedIn = Auth.loggedIn();

  return (
    <div className="flex-row justify-space-between">
      <EventList events={events} />
    </div>
  );
};

export default Dashboard;
