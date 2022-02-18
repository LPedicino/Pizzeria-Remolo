import CarouselImg from "./components/carousel/CarouselImg";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navBar/NavBar";
import Cards from "./components/cards/Cards.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

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
        <br />
        <h1 className="text-center"> Lo mas Pedido !</h1>
        <br />
        <div className="cardbody">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </header>
      <br />
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
