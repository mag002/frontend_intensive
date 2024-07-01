const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
const port = 3001;
const SECRET_KEY = "your-secret-key";
const REFRESH_SECRET_KEY = "your-refresh-secret-key";

app.use(bodyParser.json());
app.use(cors());

let refreshTokens = [];

function generateAccessToken(username) {
    return jwt.sign({ username }, SECRET_KEY, { expiresIn: "15m" });
}

function generateRefreshToken(username) {
    const refreshToken = jwt.sign({ username }, REFRESH_SECRET_KEY);
    refreshTokens.push(refreshToken);
    return refreshToken;
}

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (username === "user" && password === "password") {
        const accessToken = generateAccessToken(username);
        const refreshToken = generateRefreshToken(username);
        res.json({ accessToken, refreshToken });
    } else {
        res.status(401).send("Invalid credentials");
    }
});

app.get("/resource", (req, res) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) return res.sendStatus(401);

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403);
        res.json({ data: "Protected resource data" });
    });
});

app.post("/refresh", (req, res) => {
    const { refreshToken } = req.body;

    if (!refreshToken || !refreshTokens.includes(refreshToken)) {
        return res.sendStatus(403);
    }

    jwt.verify(refreshToken, REFRESH_SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403);

        const newAccessToken = generateAccessToken(user.username);
        res.json({ accessToken: newAccessToken });
    });
});

app.listen(port, () => {
    console.log(`Mock server running at http://localhost:${port}`);
});