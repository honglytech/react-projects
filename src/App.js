import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React Projects</p>
        <a
          className="App-link"
          href="https://honglytech.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          About Me
        </a>
      </header>
    </div>
  );
}

export default App;
