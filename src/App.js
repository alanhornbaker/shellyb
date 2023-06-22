import logo from "./images/bee-logo.avif";
import "./App.css";
import Navbar from "./compenents/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>ShellyB</p>
        <div className="auth-nav">
          <button type="button" class="icon-button">
            <img src="path/to/image" alt="Logo" />
          </button>
          <button type="button" class="icon-button">
            <img src="path/to/image" alt="Logo" />
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
