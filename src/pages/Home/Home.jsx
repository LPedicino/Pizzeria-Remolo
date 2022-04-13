import CarouselImg from "../../components/carousel/CarouselImg";
import useFetchData from "../../hooks/useFetchData";
import Spinner from "../../components/spinner/Spinner";
import Footer from "../../components/footer/Footer";
import ProductCategory from "../../components/productCategory/ProductCategory";

const Home = () => {
  const {
    pizzasCategory,
    postresCategory,
    bebidasCategory,
    empanadasCategory,
    loading,
  } = useFetchData();

  return (
    <div className="pt-5">
      <CarouselImg />

      <div className="cardbody min-vh-100">
        {loading ? (
          <div className="container mx-auto d-flex align-items-center justify-content-center">
            <Spinner />
          </div>
        ) : (
          <>
            <ProductCategory 
              textCategory="Pizzas" 
              category={pizzasCategory} 
            />

            <ProductCategory
              textCategory="Empanadas"
              category={empanadasCategory}
            />

            <ProductCategory
              textCategory="Postres"
              category={postresCategory}
            />

            <ProductCategory
              textCategory="Bebidas"
              category={bebidasCategory}
            />
          </>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Home;
