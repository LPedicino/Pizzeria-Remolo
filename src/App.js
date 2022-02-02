import logo from "./assets/logo.png";
import Carrousel from "./components/carrousel/Carrousel";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <h1>hola mundo</h1>

        <Carrousel />
      </header>
    </div>
  );
}

export default App;
