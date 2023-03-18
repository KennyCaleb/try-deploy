import logo from './logo.svg';
import './App.css';
import "./components/styles/styles.css"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Deployment Done!<br/><span style={{float:"right"}}>- Caleb</span>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Docs
        </a>
      </header>
    </div>
  );
}

export default App;
