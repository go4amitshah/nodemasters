import React from "react";
import Navbar_user from "../Navbar_user.js";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute";
import Insights from "./Insights";
import Contact from "./Contact";
import Resources from "./Resources";
import Home from "./Home.js";
import Blogs from "./Blogs.js";

export default function Main() {
  return (
    <div>
      <Navbar_user></Navbar_user>
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
      </Routes>
    </div>
  );
}
