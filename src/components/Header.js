import logo from "../images/bee-logo.avif"; // Import the logo file

export default function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p className="title">ShellyB</p>
      <div className="auth-nav">
        <button type="button" className="icon-button">
          <img src="path/to/image" alt="Logo" />
        </button>
        <button type="button" className="icon-button">
          <img src="path/to/image" alt="Logo" />
        </button>
      </div>
    </header>
  );
}
