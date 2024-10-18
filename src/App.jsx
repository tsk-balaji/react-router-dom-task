import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Courses from "./components/Courses";

function App() {
  return (
    <div className="navBar">
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/All" />} />
        <Route path="/:category" element={<Courses />}></Route>
      </Routes>
    </div>
  );
}

export default App;
