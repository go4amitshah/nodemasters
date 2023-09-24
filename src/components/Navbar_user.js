import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function NavbarUser() {
  const navigate = useNavigate();
  async function logout() {
    try {
      const response = await fetch("http://localhost:8000/logout", {
        method: "GET",
        credentials: "include",
      });

      if (response.ok) {
        localStorage.clear(); // Clear localStorage on the client-side
        navigate("/login"); // Redirect to the login page or any other desired page
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div>
      <nav className="navbar user-nav navbar-expand-lg justify-content-center">
        <div className="container-fluid">
          <a className="navbar-brand">nodeMasters - Welcome User!</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/user"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a
                  onClick={() => {
                    navigate("/user/insights");
                  }}
                  className="nav-link"
                >
                  Insights
                </a>
              </li>
              <li className="nav-item">
                <Link to="/user/resources" className="nav-link">
                  Resources
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/user/contact" className="nav-link">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/user/blogs" className="nav-link">
                  Blogs
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/user/news" className="nav-link">
                  News
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={logout} to="/login">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
