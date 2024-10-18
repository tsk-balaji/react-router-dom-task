import PropTypes from "prop-types";

export default function ProductCard({ data = {} }) {
  return (
    <div className="col-md-4 mb-5">
      <div className="card h-100">
        <div
          className="badge bg-dark text-white position-absolute"
          style={{ top: "0.5rem", right: "0.5rem" }}
        >
          Most Popular
        </div>
        <img className="card-img-top" src={data.image} alt="..." />
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  data: PropTypes.object,
  handleAddToCart: PropTypes.func,
  isAddedToCart: PropTypes.bool,
};
