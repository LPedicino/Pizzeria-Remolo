import CarouselImg from "../../components/carousel/CarouselImg";
import Cards from "../../components/cards/Cards";
import useFetchData from "../../hooks/useFetchData";
import Footer from "../../components/footer/Footer";

const Home = () => {
  const { data, loading } = useFetchData();

  console.log(loading);

  return (
    <div className="pt-5">
      <CarouselImg />

      <h3 className="fw-bold fs-1 text-center p-4">Pizzas</h3>

      <div className="cardbody">
        {
        data.map((data) => (
          <Cards key={data._id} data={data} />
        ))
        }
      </div>

      <Footer />
    </div>
  );
};

export default Home;
