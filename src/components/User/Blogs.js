import React, { useEffect } from "react";

export default function Blogs() {
  useEffect(() => {
    getBlogs();
  });
  async function getBlogs(params) {
    const temp = "";
    const toShowHTML = "";
    const response = await fetch("http://localhost:8000/blogs", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {});
  }

  return (
    <div>
      <div className="container">
        <h1 className="display-4">Blogs:</h1>
      </div>
      <div className="container" id="blogs"></div>
    </div>
  );
}
