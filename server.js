// Require các packages cần thiết
const express = require("express");
const bodyParser = require("body-parser");

// Import các routes theo từng chủ đề cần sử dụng vào server
const userRoutes = require("./routes/user.routes");

// Khởi tạo server thông qua express
const server = express();

// Sử dụng các packages, third-party middlewares cần thiết
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.static("public"));

// Khởi tạo các endpoint dành cho các HTTP request
// ===
// Sử dụng các routes đã được phần tách ra thành từng chủ đề
// Tại file server.js này
server.use("/users", userRoutes);

// Toàn bộ routes trong file user.routes.js Sẽ được nối với "/users"
// router.get("/") ---> server.get("/users")
// router.get("/:id") ---> server.get("/users/:id")
// router.post("/") ---> server.post("/users")

server.get("/amee-photo", (req, res) => {
  res.json({
    message: "Hello world",
    url: "http://localhost:3000/amee.webp",
  });
});

server.get("/", (req, res) => {
  console.log(__dirname);
  res.sendFile(`${__dirname}/public/homepage.html`);
});

// Endpoint
// Users endpoint
// GET/ POST/ PUT/ PATCH/ DELETE
// GET ALL
server.get("/users", (req, res) => {
  res.json({
    message: "GET ALL USERS",
  });
});

// GET ONE
server.get("/users/:id", (req, res) => {
  let { id } = req.params;
  console.log(id);
  res.json({
    message: "GET ONE USER WITH ID = " + id,
  });
});

// POST
server.post("/users", (req, res) => {
  let { email, password } = req.body;
  console.log(email, password);
  res.json({
    message: "CREATE USER WITH EMAIL = " + email,
  });
});

// Albums endpoint
// GET/ POST/ PUT/ PATCH/ DELETE

// Photos endpoint
// GET/ POST/ PUT/ PATCH/ DELETE

// Cho server lắng nghe tại cổng 3000

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
