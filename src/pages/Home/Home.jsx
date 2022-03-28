import CarouselImg from "../../components/carousel/CarouselImg";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navBar/NavBar";
import Cards from "../../components/cards/Cards";
import "bootstrap/dist/css/bootstrap.min.css";
<<<<<<< HEAD:src/App.js
import "./App.css";
import Confirmation from "./pages/Confirmation";
=======
import "./Home.css";
>>>>>>> dante_develop:src/pages/Home/Home.jsx

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="navigator">
          <NavBar />
        </div>

        <CarouselImg />

        <br />
        <h3 className="text-center"> Lo mas Pedido !</h3>
        <br />
        <div className="cardbody flex-wrap">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </header>
      <br />
      {/* <Confirmation /> */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
