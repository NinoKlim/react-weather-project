import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container-fluid bgContainer mb-3">
        <Weather />
      </div>
      <footer>
        Coded by Nina Klymenko,{" "}
        <a
          href="https://github.com/NinoKlim/react-weather-project"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
