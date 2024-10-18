import PropTypes from "prop-types";

export default function ProductCard({ data = {} }) {
  return (
    <div className="col-md-4 mb-5 ">
      <div className="card h-100">
        <div
          className="badge bg-dark text-white position-absolute"
          style={{ top: "0.5rem", right: "0.5rem" }}
        >
          Most Popular
        </div>
        <img className="card-img-top" src={data.image} alt="..." />
        <div>
          <div className="courseName">{data.courseName}</div>
          <div className="lang"> Available in </div>
          <div className="langArr"> {data.lang.join(", ")}</div>
          <button
            className="knwMore btn btn-sm btn-success"
            onClick={() => {
              alert(
                `Thanks For Choosing Guvi !                                                                  Now redirecting to the ${data.courseName}'s page.`
              );
            }}
          >
            Know More {">>"}
          </button>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  data: PropTypes.object,
};
