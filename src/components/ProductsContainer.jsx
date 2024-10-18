import ProductCard from "./ProductCard";
import PropTypes from "prop-types";

export default function ProductsContainer({
  products = [],
  selectedCategory = {},
}) {
  console.log(selectedCategory);
  return (
    <section className="container" id="products-container">
      <div className="container-fluid p-5">
        <div className="row">
          {products.length > 0 ? (
            products
              // .filter(
              //   (product) => product.category === selectedCategory.category
              // )
              .map((data, index) => (
                <ProductCard key={`${data.name}-${index}`} data={data} />
              ))
          ) : (
            <p>No products available</p>
          )}
        </div>
      </div>
    </section>
  );
}

ProductsContainer.propTypes = {
  products: PropTypes.array,
  selectedCategory: PropTypes.array,
};
