import CarouselImg from "../../components/carousel/CarouselImg";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navBar/NavBar";
import Cards from "../../components/cards/Cards";

const App = () => {
  return (
    <div className="App">
      <header className="App-header mb-5">
        <NavBar />
      </header>

      <CarouselImg />

      <h3 className="fw-bold fs-1 text-center p-4">Pizzas</h3>

      <div className="cardbody">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>

      <Footer />
    </div>
  );
};

export default App;
