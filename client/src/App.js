import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloConsumer,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import pages
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import NoMatch from "./pages/NoMatch";

//import components
import Header from "./components/Header";
import Footer from "./components/Footer";

import Auth from "./utils/auth";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="main-container">
          {Auth.loggedIn() ? <Header /> : null}

          <div className="container">
            {Auth.loggedIn() ? (
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/login" component={Dashboard} />
                <Route exact path="/signup" component={Dashboard} />
                <Route exact path="/profile/:username?" component={Profile} />
                <Route exact path="/profile/:name?" component={Profile} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="*" component={NoMatch} />
              </Switch>
            ) : (
              <Switch>
                <Route exact path="/signup" component={Signup} />
                <Route exact path="*" component={Login} />
              </Switch>
            )}
          </div>
          {Auth.loggedIn() ? <Footer /> : null}
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
