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
  // const { username, password, email } = req.body
  const username = req.body.data.username;
  const password = req.body.data.password;
  const email = req.body.data.email;
  // console.log("Username: ", username);
  // console.log("server", req.body.data.username);
  pool.getConnection((err, connection) => {
    connection.query(
      "INSERT INTO logindata (username, password, email , role) VALUES (?, ?, ? , ?)",
      [username, password, email, "user"],
      (err, rows) => {
        connection.release();
        if (err) {
          console.error("Error while performing Query.", err);
          return res.status(500).send("Error while performing Query.");
        } else if (rows.username === username) {
          return res.status(409).send("User already exists.");
        } else {
          res.json({ message: "User registered successfully." });
        }
      }
    );
  });
});
app.listen(8000, () => {
  console.log("App listening at : http://localhost:8000");
});
