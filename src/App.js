import logo from "./mia_vlad.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mia and Vlad Wedding RSVP
        </a>
      </header>
    </div>
  );
}

export default App;
