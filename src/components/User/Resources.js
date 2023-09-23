import React from "react";

export default function Resources() {
  // const pdfCard = document.getElementById("pdf");
  // pdfCard.addEventListener("click", () => {
  //   // Replace the content with PDF-related cards
  //   pdfCard.innerHTML = `
  //               <div class="card link-card">
  //                   <h2><a href="https://www.example.com/pdf1.pdf" target="_blank">PDF 1</a></h2>
  //               </div>
  //               <div class="card link-card">
  //                   <h2><a href="https://www.example.com/pdf2.pdf" target="_blank">PDF 2</a></h2>
  //               </div>
  //               <div class="card link-card">
  //                   <h2><a href="https://www.example.com/pdf3.pdf" target="_blank">PDF 3</a></h2>
  //               </div>
  //           `;
  // });
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
        <h1 className="display-3">Resources</h1>
        <h1 className="display-6">
          All the resources like notes,information related to collage,and other
          information related to collage are provided here!
        </h1>
        .
        <div className="container">
          <div class="card" id="pdf">
            <h2>PDFs</h2>
          </div>
          <div class="card link-card" id="dsa">
            <h2>
              <a
                href="https://vpmpce.files.wordpress.com/2023/02/ds-imp-questions.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Data Structures and Algorithms
              </a>
            </h2>
          </div>
          <div class="card link-card" id="bos">
            <h2>
              <a
                href="https://vpmpce.files.wordpress.com/2023/02/bos-imp-questions.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Operating Systems
              </a>
            </h2>
          </div>
          <div class="card link-card" id="python">
            <h2>
              <a
                href="https://vpmpce.files.wordpress.com/2023/02/imp-questions.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Python Programming
              </a>
            </h2>
          </div>
          <div class="card link-card" id="rdbms">
            <h2>
              <a
                href="https://vpmpce.files.wordpress.com/2023/02/important-questions-rdbms.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Relational Database Management Systems
              </a>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
