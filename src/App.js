import "./App.css";
import Weather from "./Weather";

function App() {
  // const apiToken = "cd734928f9329a";
  // const apiTokenUrl = `https://ipinfo.io/json?token=${apiToken}`;
  // axios.get(apiTokenUrl).then(getWeather);

  // function getWeather(cityValue) {
  //   setCity({ city: cityValue.data.city });
  // }
  return (
    <div className="App">
      <div className="container-fluid  mb-3">
        <div className="bgContainer">
          <Weather />
        </div>
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
