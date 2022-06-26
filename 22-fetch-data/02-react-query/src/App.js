import "./App.css";
import Characters from "./components/Characters";
import OldCharacters from "./components/OldCharacters";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <h1>Without React Query</h1>
      <OldCharacters />
      <h1>With React Query</h1>
      <QueryClientProvider client={queryClient}>
        <Characters />
      </QueryClientProvider>
    </div>
  );
}

export default App;
