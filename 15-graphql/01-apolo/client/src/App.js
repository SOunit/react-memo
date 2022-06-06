import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import "./App.css";
import Form from "./components/Form";
import GetUsers from "./components/GetUsers";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, location, path }) => {
      alert(`GraphQL Error! ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: `http://localhost:5000/graphql` }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <GetUsers />
      <Form />
    </ApolloProvider>
  );
}

export default App;
