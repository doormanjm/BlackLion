const mysql = require("mysql2");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Use body-parser middleware correctly
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Passw0rd",
    database: "my_project_database",
});

// Connect to the database
connection.connect((error) => {
    if (error) throw error;
    console.log("Connected to the database successfully!");
});

// Serve the login page
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// Handle login form submission
app.post("/", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // Fix: Correct the method name to 'query'
    connection.query(
        "SELECT * FROM person WHERE username = ? AND password = ?",
        [username, password],
        (error, results) => {
            if (error) throw error;

            if (results.length > 0) {
                res.redirect("/dashboard");
            } else {
                res.redirect("/");
            }
        }
    );
});

// Serve the dashboard page
app.get("/dashboard", (req, res) => {
    res.sendFile(__dirname + "/dashboard.html");
});

// Set app to listen on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
