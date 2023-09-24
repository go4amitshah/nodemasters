import React, { useEffect } from "react";

export default function Blogs() {
  useEffect(() => {
    getBlogs();
  });
  async function getBlogs(params) {
    var temp = "";
    var toShowHTML = "";
    fetch("http://localhost:8000/blogs", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        data.forEach((blog) => {
          temp = ` <div class="card text-center bg-transparent">
            <div class="card-body">
              <h4 class="card-title">${blog.title}</h4>
              <p class="card-text">${blog.description}</p>
            </div>
          </div>`;
          toShowHTML += temp;
        });
        document.querySelector("#blogs").innerHTML = toShowHTML;
      });
  }

  return (
    <div>
      <div className="container bg-pattern">
        <h1 className="display-4">Blogs:</h1>
        <div className="container" id="blogs"></div>
      </div>
    </div>
  );
}
