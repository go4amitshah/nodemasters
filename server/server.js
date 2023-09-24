const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
// app.use(cors());
const pool = mysql.createPool({
  connectionLimit: 100,
  host: "localhost",
  user: "root",
  password: "",
  database: "nodemasters",
});

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/login", (req, res) => {
  console.log(req.body);

  const username = req.body.data.username;
  const password = req.body.data.password;
  const email = req.body.data.email;
  const role = req.body.data.role;
  // localStorage.clear();
  pool.getConnection((err, connection) => {
    connection.query(
      "SELECT * FROM logindata WHERE username = ?",
      [username],
      (err, rows) => {
        connection.release();
        if (err) {
          return res.status(500).send("Error while performing Query.");
        }
        if (rows.length === 0) {
          return res.status(404).send("User not found.");
        }

        const user = rows[0];
        console.log(user.password, "  ", password);
        if (user.password !== password) {
          return res.status(401).send("Invalid password.");
        }

        const token = "uwg34rgw386gee8h34dr248trdt42837";

        if (user.role === "admin") {
          res.json({ role: "admin" });
        } else if (user.role === "user") {
          res.json({ role: "user" });
        } else {
          return res.status(401).send("Invalid role.");
        }
      }
    );
  });
});

app.get("/logout", (req, res) => {
  const { username, password, email, role } = req.body;
  res.clearCookie("token");
  res.send(`<script>
            localStorage.clear();
            console.log(localStorage  )
          </script>`);
});

app.post("/register", (req, res) => {
  const username = req.body.data.username;
  const password = req.body.data.password;
  const email = req.body.data.email;

  pool.getConnection((err, connection) => {
    connection.query(
      "SELECT * FROM logindata WHERE username = ?",
      [username],
      (err, rows) => {
        connection.release();
        if (err) {
          return res.status(500).send("Error while performing Query.");
        }
        if (rows.length !== 0) {
          return res.status(409).send("User already exists.");
        }
        connection.query(
          "INSERT INTO logindata (username, password, email, role) VALUES (?, ?, ?, ?)",
          [username, password, email, "user"],
          (err, result) => {
            if (err) {
              console.error("Error while performing Query.", err);
              return res.status(500).send("Error while performing Query.");
            }
            res.json({ message: "User registered successfully." });
          }
        );
      }
    );
  });
});
//? ----------------------------------------------
//! News:
app.get("/news", (req, res) => {
  pool.getConnection((err, connection) => {
    connection.query("SELECT * FROM news", (err, rows) => {
      connection.release();
      if (err) {
        return res.status(500).send("Error while performing Query.");
      }
      res.json(rows);
    });
  });
});
app.post("/news_insert", (req, res) => {
  console.log(req.body);
  const title = req.body.title;
  const description = req.body.description;
  pool.getConnection((err, connection) => {
    connection.query(
      "INSERT INTO news (title, description) VALUES (?, ?)",
      [title, description],
      (err, result) => {
        if (err) {
          console.error("Error while performing Query.", err);
          return res.status(500).send("Error while performing Query.");
        }
        res.send("Success");
      }
    );
  });
});
app.post("/news_delete", (req, res) => {
  console.log(req.body);
  const id = parseInt(req.body.id);
  pool.getConnection((err, connection) => {
    connection.query(
      "DELETE FROM news WHERE news_id = ?",
      [id],
      (err, result) => {
        if (err) {
          console.error("Error while performing Query.", err);
          return res.status(500).send("Error while performing Query.");
        }
        res.send("Success");
      }
    );
  });
});
//! Notes:
app.get("/resources", (req, res) => {
  pool.getConnection((err, connection) => {
    connection.query("SELECT * FROM resources", (err, rows) => {
      connection.release();
      if (err) {
        return res.status(500).send("Error while performing Query.");
      }
      res.json(rows);
    });
  });
});
app.post("/resources_insert", (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  pool.getConnection((err, connection) => {
    connection.query(
      "INSERT INTO resources (title, description) VALUES (?, ?)",
      [title, description],
      (err, result) => {
        if (err) {
          console.error("Error while performing Query.", err);
          return res.status(500).send("Error while performing Query.");
        }
        res.send("Success");
      }
    );
  });
});
app.post("/resources_delete", (req, res) => {
  const id = parseInt(req.body.id);
  pool.getConnection((err, connection) => {
    connection.query(
      "DELETE FROM resources WHERE resource_id = ?",
      [id],
      (err, result) => {
        if (err) {
          console.error("Error while performing Query.", err);
          return res.status(500).send("Error while performing Query.");
        }
        res.send("Success");
      }
    );
  });
});
//! Blog:
app.get("/blogs", (req, res) => {
  pool.getConnection((err, connection) => {
    connection.query("SELECT * FROM blogs", (err, rows) => {
      connection.release();
      if (err) {
        return res.status(500).send("Error while performing Query.");
      }
      res.json(rows);
    });
  });
});

app.post("/blog_insert", (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  pool.getConnection((err, connection) => {
    connection.query(
      "INSERT INTO blogs (title, description) VALUES (?, ?)",
      [title, description],
      (err, result) => {
        if (err) {
          console.error("Error while performing Query.", err);
          return res.status(500).send("Error while performing Query.");
        }
        res.send("Success");
      }
    );
  });
});
app.post("/blog_delete", (req, res) => {
  const id = parseInt(req.body.id);
  pool.getConnection((err, connection) => {
    connection.query(
      "DELETE FROM blogs WHERE blog_id = ?",
      [id],
      (err, result) => {
        if (err) {
          console.error("Error while performing Query.", err);
          return res.status(500).send("Error while performing Query.");
        }
        res.send("Success");
      }
    );
  });
});

//! Insights:
app.get("/insights", (req, res) => {
  pool.getConnection((err, connection) => {
    connection.query("SELECT * FROM insights", (err, rows) => {
      connection.release();
      if (err) {
        return res.status(500).send("Error while performing Query.");
      }
      res.json(rows);
    });
  });
});

app.post("/insight_insert", (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  pool.getConnection((err, connection) => {
    connection.query(
      "INSERT INTO insights (title, description) VALUES (?, ?)",
      [title, description],
      (err, result) => {
        if (err) {
          console.error("Error while performing Query.", err);
          return res.status(500).send("Error while performing Query.");
        }
        res.send("Success");
      }
    );
  });
});
app.post("/insight_delete", (req, res) => {
  const id = parseInt(req.body.id);
  pool.getConnection((err, connection) => {
    connection.query(
      "DELETE FROM insights WHERE insight_id = ?",
      [id],
      (err, result) => {
        if (err) {
          console.error("Error while performing Query.", err);
          return res.status(500).send("Error while performing Query.");
        }
        res.send("Success");
      }
    );
  });
});

app.listen(8000, () => {
  console.log("App listening at : http://localhost:8000");
});
