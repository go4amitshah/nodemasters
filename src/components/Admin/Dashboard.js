import React from "react";
import { Route, Routes } from "react-router-dom";
import Intro from "./Intro";
import ProtectedRoute from "../ProtectedRoute";
import AdminNotes from "./AdminNotes";
import AdminInsights from "./AdminInsights";
import AdminBlog from "./AdminBlog";
import AdminNews from "./AdminNews";

export default function Dashboard() {
  return (
    <div>
      Dashboard
      <Routes>
        <Route path="/" element={<ProtectedRoute component={Intro} />} />
        <Route
          path="/notes"
          element={<ProtectedRoute component={AdminNotes} />}
        />
        <Route
          path="/insights"
          element={<ProtectedRoute component={AdminInsights} />}
        />
        <Route
          path="/blog"
          element={<ProtectedRoute component={AdminBlog} />}
        />
        <Route
          path="/news"
          element={<ProtectedRoute component={AdminNews} />}
        />
      </Routes>
    </div>
  );
}
