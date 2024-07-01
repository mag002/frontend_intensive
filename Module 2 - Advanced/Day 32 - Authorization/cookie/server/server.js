const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
const port = 3001;
const SECRET_KEY = "your-secret-key";
const REFRESH_SECRET_KEY = "your-refresh-secret-key";

app.use(bodyParser.json());
app.use(
  cors({ // Cross o
    origin: "http://127.0.0.1:5500", // Change this to your frontend's origin
    credentials: true,
  })
);
// Add headers before the routes are defined
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});
app.use(cookieParser());

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
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      maxAge: 15 * 60 * 1000,
    }); // 15 minutes
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    }); // 7 days
    res.json({ message: "Login successful" });
  } else {
    res.status(401).send("Invalid credentials");
  }
});

app.get("/resource", (req, res) => {
  const token = req.cookies.accessToken;
  console.log(req.cookies);
  if (!token) return res.sendStatus(401);

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    res.json({ data: "Protected resource data" });
  });
});

app.post("/refresh", (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken || !refreshTokens.includes(refreshToken)) {
    return res.sendStatus(403);
  }

  jwt.verify(refreshToken, REFRESH_SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403);

    const newAccessToken = generateAccessToken(user.username);
    res.cookie("accessToken", newAccessToken, {
      httpOnly: true,
      maxAge: 15 * 60 * 1000,
    }); // 15 minutes
    res.json({ message: "Token refreshed" });
  });
});

app.listen(port, () => {
  console.log(`Mock server running at http://localhost:${port}`);
});
