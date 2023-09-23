import React from "react";

export default function Home() {
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

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          class="card text-center"
          style={{
            backdropFilter: "blur(5px)",
            backgroundColor: "#000b229d",
          }}
        >
          <div class="card-body">
            <h4 class="card-title">
              <h1 className="display-3">nodeMasters </h1>
            </h4>
            <p class="card-text">
              <h1 className="display-6">Start your college journey with us!</h1>
            </p>
          </div>
        </div>
      </div>
      <div className="container pattern">
        <div className="row">
          <div className="col-md-6">
            <h1 className="display-3 text-start">
              We provide you teahcer insights. Know your teachers better!{" "}
            </h1>
          </div>
          <div className="col-md-6">
            <div class="card cardOP">
              <div class="card-header">Insights</div>
              <div class="card-body">
                <h5 class="card-title">Know your teachers!</h5>
                <p class="card-text">
                  We provide you all the imformation about all teachers ,
                  explaining their ideology helping you get a better grasp of
                  their knowledge.
                </p>
                <a href="#" class="btn btn-primary">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-6">
            <div class="card cardOP">
              <div class="card-header">News</div>
              <div class="card-body">
                <h5 class="card-title">Letest News!</h5>
                <p class="card-text">
                  We provide you with letest news regarding your university and
                  GTU, so that you are always on track!
                </p>
                <a href="#" class="btn btn-primary">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h1 className="display-3 text-end">
              Get hooked with letest news!{" "}
            </h1>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-6">
            <h1 className="display-3 text-end">
              Get all the notes prepared and reviewed by your seniors!{" "}
            </h1>
          </div>
          <div className="col-md-6">
            <div class="card cardOP">
              <div class="card-header">Resources</div>
              <div class="card-body">
                <h5 class="card-title">Notes!</h5>
                <p class="card-text">Get subject wise notes by your seniors!</p>
                <a href="#" class="btn btn-primary">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
