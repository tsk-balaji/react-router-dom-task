import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function NavBar() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary justify-content-center mt-4">
      <div className="container-fluid justify-content-center">
        <ul
          className="navbar-nav"
          style={{ boxShadow: "0px 3px 3px rgba(0, 0, 4, 0.5)" }}
        >
          <li className="nav-item">
            <Link
              className={`nav-link ${activeLink === "/All" ? "active" : ""}`}
              to="/All"
              onClick={() => setActiveLink("/All")}
            >
              All
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${
                activeLink === "/Full Stack" ? "active" : ""
              }`}
              to="/Full Stack"
              onClick={() => setActiveLink("/Full Stack")}
            >
              Full Stack Development
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${
                activeLink === "/Auto CAD" ? "active" : ""
              }`}
              to="/AutoCAD"
              onClick={() => setActiveLink("/Auto CAD")}
            >
              Auto Desk
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${
                activeLink === "/Data Science" ? "active" : ""
              }`}
              to="/Data Science"
              onClick={() => setActiveLink("/Data Science")}
            >
              Data Science
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${activeLink === "UIorUX" ? "active" : ""}`}
              to="/UIorUX"
              onClick={() => setActiveLink("/UIorUX")}
            >
              UI/UX
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
