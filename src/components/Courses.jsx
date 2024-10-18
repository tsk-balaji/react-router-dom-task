import { useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

export default function Courses() {
  const params = useParams(); //params to get the course category
  const [courses, setCourses] = useState([]);
  useLayoutEffect(() => {
    fetch("http://localhost:5174/courses.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((result) => {
        // console.log(result); // Add this to check the response
        if (result && result.data.length > 0) {
          setCourses(result.data);
        }
      })
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  return (
    <section className="container" id="products-container">
      <div className="container-fluid p-5">
        <div className="row">
          {courses.length > 0 ? (
            params.category === "All" ? ( //Checks if the URL Params is empty. If yes, then all courses are rendered.
              courses.map((data, index) => (
                <ProductCard key={`${data.name}-${index}`} data={data} />
              ))
            ) : (
              //Else the courses are rendered which matches the category
              courses
                .filter((product) => product.category === params.category)
                .map((data, index) => (
                  <ProductCard key={`${data.name}-${index}`} data={data} />
                ))
            )
          ) : (
            <p>No products available</p>
          )}
        </div>
      </div>
    </section>
  );
}
