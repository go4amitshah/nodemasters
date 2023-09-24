import React, { useEffect } from "react";

function NewsApp() {
  useEffect(() => {
    getNews();
  });

  async function getNews() {
    var temp = "";
    var toShowHTML = "";
    fetch("http://localhost:8000/news", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        data.forEach((news) => {
          temp = ` <div class="card text-center bg-transparent">
            <div class="card-body">
              <h4 class="card-title">${news.title}</h4>
              <p class="card-text">${news.description}</p>
            </div>
          </div>`;
          toShowHTML += temp;
        });
        document.querySelector("#news").innerHTML = toShowHTML;
      });
  }
  return (
    <div>
      <div className="container bg-pattern">
        <h1 className="display-4">News:</h1>
        <div className="container" id="news"></div>
      </div>
    </div>
  );
}

export default NewsApp;
