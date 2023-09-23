import React from "react";

export default function Contact() {
  return (
    <div
      className="container-fluid"
      style={{
        paddingLeft: "0px",
        marginLeft: "0px",
        backgroundColor: "black",
      }}
    >
      <div
        className="container-fluid intro"
        style={{
          backgroundImage: "url(./forest.jpg)",
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1 className="display-3">Contacts</h1>
        <h1 className="display-6">All the contacts are provided here!</h1>
      </div>
      <div className="container d-flex justify-content-center">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Devansh jani</h5>
                <p className="card-text">
                  Email: <br /> devansh@gmail.com
                </p>
                <p className="card-text">Phone: 7383682408</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card ">
              <div className="card-body">
                <h5 className="card-title">Parv Shah</h5>
                <p className="card-text">
                  Email: <br /> parv@gmail.com
                </p>
                <p className="card-text">Phone: 9601465697</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
