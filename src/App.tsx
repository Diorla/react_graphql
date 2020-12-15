import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import GetMeetings from "./GetMeetings";
import React from "react";
import GetUserInfo from "./GetUserInfo";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://dev-clover-server.azurewebsites.net/graphql",
});
function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <GetMeetings
          user__id_operator="EQUAL"
          user_id_value={4}
          sort_createdAt="ASC"
          sort_updatedAt="ASC"
          first={10}
          after="hello"
          offset={0}
        />
        <GetUserInfo id="001" />
      </div>
    </ApolloProvider>
  );
}

export default App;
