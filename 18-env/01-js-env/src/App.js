import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>REACT_APP_GRAPHQL_URL</h1>
      <p>{process.env.REACT_APP_GRAPHQL_URL}</p>
    </div>
  );
}

export default App;
