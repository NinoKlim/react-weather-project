import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container-fluid bgContainer">
        <Weather />
        <footer>
          <a href="/" target="_blank" rel="noreferrer"></a>
        </footer>
      </div>
    </div>
  );
}

export default App;
