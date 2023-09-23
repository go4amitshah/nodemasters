import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  async function auth() {
    const data = {
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
      email: document.getElementById("email").value,
      role: document.getElementById("role").value,
    };
    const response = await fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.role);
        if (data.role === "admin") {
          localStorage.setItem("token", "dn2h23d2783dh28934h");
          localStorage.setItem("role", "admin");
          console.log("HEHE");
          navigate("/admin");
        } else {
          console.log("HEHEwejdiuwejd");
          localStorage.setItem("token", "dn2h23d2783dh28934h");
          localStorage.setItem("role", "user");
          navigate("/user");
        }
      });
  }
  function reg() {
    navigate("/register");
  }
  return (
    <div>
      <div
        className="container-fluid d-flex galaxy"
        style={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div className="row">
          <div
            className="col-md-6 d-flex text-start"
            style={{ alignItems: "center", justifyContent: "start" }}
          >
            <h1 className="display-3">
              Welcome to NodeMasters! <br /> Login:{" "}
            </h1>
          </div>
          <div className="col-md-6">
            <div
              className="card"
              style={{
                backgroundColor: "transparent",
                backdropFilter: "blur(4px)",
              }}
            >
              <div className="card-body">
                <div className="mb-3">
                  <label htmlFor="" className="form-label">
                    Username:
                  </label>
                  <input type="text" className="form-control" id="username" />
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="form-label">
                    Role (admin or user accordingly)
                  </label>
                  <input type="text" className="form-control" id="role" />
                </div>

                <button
                  type="submit"
                  className="btn btn-outline-light"
                  onClick={auth}
                >
                  Login
                </button>
                <br />
                <br />
                <div>Not a member? </div>
                <br />
                <button
                  type="submit"
                  className="btn btn-outline-light"
                  onClick={reg}
                >
                  Sign UP!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
