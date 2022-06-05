import Hero from "./components/Hero";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName="Superman" />
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary>
    </div>
  );
}

export default App;
