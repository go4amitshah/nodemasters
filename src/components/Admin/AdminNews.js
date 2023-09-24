import React, { useEffect } from "react";
async function dele() {
  try {
    const data = {
      id: document.getElementById("news_id").value,
    };
    const response = await fetch("http://localhost:8000/news_delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Make sure this is set correctly
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const data = await response.json();
      alert(data);
    } else {
      throw new Error("Error: " + response.status);
    }
  } catch (error) {
    console.error(error);
  }
}
async function insert() {
  try {
    const data = {
      title: document.getElementById("title").value,
      description: document.getElementById("description").value,
    };
    const response = await fetch("http://localhost:8000/news_insert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Make sure this is set correctly
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const data = await response.json();
      alert(data);
    } else {
      throw new Error("Error: " + response.status);
    }
  } catch (error) {
    console.error(error);
  }
}
export default function AdminNews() {
  useEffect(() => {
    getNews();
  }, []);

  async function getNews(params) {
    var temp = "";
    var toShowHTML = "";

    const response = await fetch("http://localhost:8000/news", {
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
              <h4 class="card-title">${news.news_id}</h4>
              <p class="card-text">${news.title}</p>
              <p class="card-text">${news.description}</p>
            </div>
          </div>`;
          toShowHTML += temp;
        });
        document.querySelector("#toDisplay").innerHTML = toShowHTML;
      });
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>News:</h1>
            <div id="toDisplay"></div>
          </div>
          <div className="col-md-6">
            <h1>Operations:</h1>
            <div className="row py-2">
              <div class="card text-center bg-transparent">
                <div className="card-header">Insert An Element</div>
                <div class="card-body">
                  <p class="card-text">
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">
                        Title:
                      </label>
                      <input type="text" class="form-control" id="title" />
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label">
                        Description
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="description"
                      />
                    </div>

                    <button
                      type="submit"
                      class="btn btn-primary"
                      onClick={insert}
                    >
                      Insert
                    </button>
                  </p>
                </div>
              </div>
            </div>
            <div className="row py-2">
              <div class="card text-center bg-transparent">
                <div className="card-header">Delete An Element</div>
                <div class="card-body">
                  <p class="card-text">
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">
                        ID:
                      </label>
                      <input type="text" class="form-control" id="news_id" />
                    </div>

                    <button
                      type="submit"
                      class="btn btn-primary"
                      id="btn"
                      onClick={dele}
                    >
                      Submit
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
