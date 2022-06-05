import { useRoutes } from "react-router-dom";
import "./App.css";
import Location from "./pages/Location";
import SearchParams from "./pages/SearchParams";

function App() {
  const routes = useRoutes([
    { path: "/", element: <SearchParams /> },
    { path: "/location", element: <Location /> },
  ]);
  return <div className="App">{routes}</div>;
}

export default App;
