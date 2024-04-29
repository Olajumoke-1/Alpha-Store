const express = require("express");
const db = require("./routes/db-config");
const app = express();
const cookie = require("cookie-parser");
const PORT = process.env.PORT || 5004;

app.use("/js", express.static(__dirname + "./public/js"));
app.use("/css", express.static(__dirname + "./public/css"));
app.set("views", "./views");
app.use(cookie());
app.use(express.json());

// Connect to the database
db.connect((err) => {
    if (err) throw err;
    console.log("Database connected");
});

// Endpoint to fetch items from the database
app.get("/get_Categories", (req, res) => {
    const sql = "SELECT * FROM category";
    db.query(sql, (err, data) => {
        if (err) {
            console.error("Error fetching items:", err);
            return res.status(500).json({ error: "Internal server error" });
        }
        return res.json(data);
    });
});

// Sign up endpoint
app.post("/signUp", (req, res) => {
    const { email, password } = req.body;
    // Check if email and password are provided
    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
    }
    // Implement your logic to insert user data into the database
    const sql = "INSERT INTO users (email, password) VALUES (?, ?)";
    db.query(sql, [email, password], (err, results) => {
        if (err) {
            console.error("Error executing SQL:", err);
            return res.status(500).json({ error: "Internal server error" });
        }
        // Check if user was successfully inserted
        if (results && results.affectedRows === 1) {
            return res.json({ message: "User registered successfully" });
        } else {
            return res.status(500).json({ error: "Failed to register user" });
        }
    });
});

// Sign in endpoint
app.post("/signIn", (req, res) => {
    const { email, password } = req.body;
    const sql = `SELECT * FROM users WHERE email = ? AND password = ?`;
    db.query(sql, [email, password], (err, results) => {
        if (err) {
            console.error("Error executing SQL:", err);
            return res.status(500).json({ error: "Internal server error" });
        }
        if (results.length > 0) {
            // User found, set a cookie or session token to indicate the user is signed in
            res.cookie("loggedIn", true);
            return res.json({ message: "Sign in successful" });
        } else {
            return res.status(401).json({ error: "Invalid email or password" });
        }
    });
});

// Sign out endpoint
app.get("/signOut", (req, res) => {
    // Clear the cookie or session token to sign the user out
    res.clearCookie("loggedIn");
    return res.json({ message: "Sign out successful" });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
