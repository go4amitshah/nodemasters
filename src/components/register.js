import React from "react";

export default function Register() {
  // const navigate = useNavigate();
  async function register() {
    const data = {
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
      email: document.getElementById("email").value,
    };
    fetch("http://localhost:8000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data,
      }),
    });
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
              Welcome to NodeMasters! <br /> Register:{" "}
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
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={register}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
