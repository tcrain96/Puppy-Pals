import React from "react";
import EventList from "../components/EventList";
import { useQuery } from "@apollo/client";
import { GET_EVENTS, QUERY_ME_BASIC } from "../utils/queries";
import AddEventForm from "../components/AddEventForm";
import "./css/Dashboard.css";

const Dashboard = () => {
  const { loading, data } = useQuery(GET_EVENTS);
  const events = data?.events || [];

  return (
    <section className="dashboard-section">
      <AddEventForm />
      <EventList events={events} />
    </section>
  );
};

export default Dashboard;
