import { Link, useRoutes } from "react-router-dom";
import "./App.css";

function App() {
  const routes = useRoutes([
    { path: "/", element: <div>index</div> },
    { path: "/a", element: <div>a</div> },
    { path: "/b", element: <div>b</div> },
    { path: "/c", element: <div>c</div> },
  ]);

  return (
    <>
      <div>
        <Link to="/" style={{ margin: 10 }}>
          top
        </Link>
        <Link to="/a" style={{ margin: 10 }}>
          a
        </Link>
        <Link to="/b" style={{ margin: 10 }}>
          b
        </Link>
        <Link to="/c" style={{ margin: 10 }}>
          c
        </Link>
      </div>
      {routes}
    </>
  );
}

export default App;
