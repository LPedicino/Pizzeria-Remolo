import Cards from "../../components/cards/Cards";

const ProductCategory = ({ textCategory, category }) => {
  return (
    <div className="product-category-container">
      <h3 className="fw-bold fs-1 text-center p-4">{textCategory}</h3>

      <div className="product-category">
        {category.map((data) => (
          <Cards key={data._id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;
