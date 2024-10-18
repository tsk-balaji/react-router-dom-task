import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Courses from "./components/courses";
function App() {
  return (
    <div className="navBar">
      <Routes>
        <Route Component={NavBar} path="/"></Route>
        <Route Component={Courses} path="/Courses/:category"></Route>
      </Routes>
    </div>
  );
}

export default App;
