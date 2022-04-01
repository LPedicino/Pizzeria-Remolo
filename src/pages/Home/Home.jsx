import CarouselImg from "../../components/carousel/CarouselImg";
import Cards from "../../components/cards/Cards";
import useFetchData from "../../hooks/useFetchData";
import Spinner from "../../components/spinner/Spinner";

const Home = () => {
  const { data, loading } = useFetchData();

  console.log(loading);

  return (
    <div className="pt-5 min-vh-100">
      <CarouselImg />

      <h3 className="fw-bold fs-1 text-center p-4">Pizzas</h3>

      <div className="cardbody">
        {loading ? (
          <div className="container mx-auto d-flex align-items-center justify-content-center">
            <Spinner />
          </div>
        ) : (
          data.map((data) => <Cards key={data._id} data={data} />)
        )}
      </div>
    </div>
  );
};

export default Home;
