import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Intro() {
  var navigate;
  navigate = useNavigate();

  return (
    <div>
      <div
        className="container-fluid admin-bg"
        style={{
          display: "flex",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div className="row">
          <h1 className="display-3">./AdminPannel</h1>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div
              class="card text-center bg-transparent bg-blur"
              onClick={() => navigate("/admin/news")}
            >
              <div class="card-body">
                <h4 class="card-title">News</h4>
                <p class="card-text">Insert/Delete</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div
              class="card text-center bg-transparent  bg-blur"
              onClick={() => navigate("/admin/blog")}
            >
              <div class="card-body">
                <h4 class="card-title">Blog</h4>
                <p class="card-text">Insert/Delete</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div
              class="card text-center bg-transparent  bg-blur"
              onClick={() => navigate("/admin/insights")}
            >
              <div class="card-body">
                <h4 class="card-title">Insights</h4>
                <p class="card-text">Insert/Delete</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div
              class="card text-center bg-transparent bg-blur"
              onClick={() => navigate("/admin/notes")}
            >
              <div class="card-body">
                <h4 class="card-title">Notes</h4>
                <p class="card-text">Insert/Delete</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
