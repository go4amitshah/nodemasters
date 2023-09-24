import React, { useEffect } from "react";

function Insights() {
  useEffect(() => {
    getinsights();
  });

  async function getinsights(params) {
    var temp = "";
    var toShowHTML = "";
    fetch("http://localhost:8000/insights", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        data.forEach((insights) => {
          temp = ` <div class="card text-center bg-transparent">
            <div class="card-body">
              <h4 class="card-title">${insights.title}</h4>
              <p class="card-text">${insights.description}</p>
            </div>
          </div>`;
          toShowHTML += temp;
        });
        document.querySelector("#insights").innerHTML = toShowHTML;
      });
  }
  return (
    <div>
      <div className="container bg-pattern">
        <h1 className="display-4">Insights:</h1>
        <div className="container" id="insights"></div>
      </div>
    </div>
  );
}

export default Insights;
