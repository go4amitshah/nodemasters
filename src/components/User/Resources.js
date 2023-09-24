import React, { useEffect } from "react";

export default function Resources() {
  useEffect(() => {
    getResources();
  });

  async function getResources(params) {
    var temp = "";
    var toShowHTML = "";
    fetch("http://localhost:8000/resources", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        data.forEach((resources) => {
          temp = ` <div class="card text-center bg-transparent">
            <div class="card-body">
              <h4 class="card-title">${resources.title}</h4>
              <p class="card-text">${resources.description}</p>
            </div>
          </div>`;
          toShowHTML += temp;
        });
        document.querySelector("#resources").innerHTML = toShowHTML;
      });
  }
  return (
    <div>
      <div className="container bg-pattern">
        <h1 className="display-4">Resources:</h1>
        <div className="container" id="resources"></div>
      </div>
    </div>
  );
}
