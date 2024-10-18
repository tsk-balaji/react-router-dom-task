import { useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductsContainer from "./ProductsContainer";

export default function Courses() {
  const params = useParams();
  const [courses, setCourses] = useState([]);
  useLayoutEffect(() => {
    fetch("/courses.json")
      .then((response) => response.json())
      .then((result) => {
        if (result.data.length > 0) {
          setCourses(result.data);
        }
      })
      .catch((error) => console.log(error));
    return () => {};
  }, []);

  return (
    <div>
      <ProductsContainer products={courses} />
    </div>
  );
}
