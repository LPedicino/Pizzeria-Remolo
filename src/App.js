import CarouselImg from "./components/carousel/CarouselImg";
import NavBar from "./components/navBar/NavBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="navigator">
          <NavBar />
        </div>
        <div>
          <CarouselImg />
        </div>
      </header>
    </div>
  );
}

export default App;
