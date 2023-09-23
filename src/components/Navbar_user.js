import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Insights from "./User/Insights";
import Contact from "./User/Contact";
import ProtectedRoute from "./ProtectedRoute";

export default function Navbar_user() {
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
      <nav class="navbar user-nav navbar-expand-lg ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            nodeMasters - Welcome User!
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/user">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <a
                  onClick={() => {
                    navigate("/user/insights");
                  }}
                  class="nav-link"
                  // href="#"
                >
                  Insights
                </a>
              </li>
              <li class="nav-item">
                <Link to="/user/resources" class="nav-link" href="#">
                  Resources
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/user/contact" class="nav-link" href="#">
                  Contact
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/user/blogs" class="nav-link" href="#">
                  Blogs
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" onClick={logout} to="/login">
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
