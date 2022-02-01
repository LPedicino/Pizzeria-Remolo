import logo from "./logo.png";
import Carrousel from "./components/carrousel/Carrousel";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>hola mundo</h1>

        <Carrousel />

        <img src={logo} alt="logo" />
      </header>
    </div>
  );
}

export default App;
