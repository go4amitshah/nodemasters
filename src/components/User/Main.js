import React from "react";
import NavbarUser from "../Navbar_user.js";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute";
import Insights from "./Insights";
import Contact from "./Contact";
import Resources from "./Resources";
import Home from "./Home.js";
import Blogs from "./Blogs.js";
import NewsApp from "./News.js";

export default function Main() {
  return (
    <div>
      <NavbarUser></NavbarUser>
      <Routes>
        <Route
          path="/insights"
          element={<ProtectedRoute component={Insights} />}
        />
        <Route path="/" element={<ProtectedRoute component={Home} />} />
        <Route
          path="/contact"
          element={<ProtectedRoute component={Contact} />}
        />
        <Route
          path="/resources"
          element={<ProtectedRoute component={Resources} />}
        />
        <Route path="/blogs" element={<ProtectedRoute component={Blogs} />} />
        <Route path="/news" element={<ProtectedRoute component={NewsApp} />} />
      </Routes>
    </div>
  );
}
