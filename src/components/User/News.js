import React, { useState } from "react";

function NewsApp() {
  const [news, setNews] = useState([]);

  const handleFetchNews = () => {
    const apiKey = "d854249a1d314d07a433d8d2f9ef4f10";
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`;

    const res = fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const filteredArticles = data.articles.filter(
          (element) => element.urlToImage && element.content
        );
        setNews(filteredArticles);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  };

  return (
    <div>
      <h1>Latest News</h1>
      <button onClick={handleFetchNews}>Fetch News for India</button>
      <div id="toShow">
        {news.map((article, index) => (
          <div className="card" style={{ width: "18rem" }} key={index}>
            <img src={article.urlToImage} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{article.title}</h5>
              <p className="card-text">{article.content}</p>
              <a
                href={article.url}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read Full
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsApp;
