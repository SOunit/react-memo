import "./App.css";
import Characters from "./components/Characters";
import OldCharacters from "./components/OldCharacters";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>With React Query</h1>
        <QueryClientProvider client={queryClient}>
          <Characters />
        </QueryClientProvider>
      </div>
      <h1>With Fetch API</h1>
      {/* <OldCharacters /> */}
    </div>
  );
}

export default App;
