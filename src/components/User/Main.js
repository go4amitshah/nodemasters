import React from "react";
import Navbar_user from "../Navbar_user.js";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute";
import Insights from "./Insights";
import Contact from "./Contact";
import Resources from "./Resources";

export default function Main() {
  return (
    <div>
      <Navbar_user></Navbar_user>
      <Routes>
        <Route
          path="/insights"
          element={<ProtectedRoute component={Insights} />}
        />
        <Route
          path="/contact"
          element={<ProtectedRoute component={Contact} />}
        />
        <Route
          path="/resources"
          element={<ProtectedRoute component={Resources} />}
        />
      </Routes>
    </div>
  );
}
