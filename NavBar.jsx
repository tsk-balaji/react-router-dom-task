import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary justify-content-center mt-4">
      <div className="container-fluid justify-content-center">
        <Link className="navbar-brand" to="/courses">
          All
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">
              Full Stack Development
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">
              Auto Desk
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">
              Data Science
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">
              UI/UX
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
