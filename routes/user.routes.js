const express = require("express");

const router = express.Router();

// Users endpoint
// GET/ POST/ PUT/ PATCH/ DELETE
// GET ALL
router.get("/", (req, res) => {
  res.json({
    message: "GET ALL USERS",
  });
});

// GET ONE
router.get("/:id", (req, res) => {
  let { id } = req.params;
  console.log(id);
  res.json({
    message: "GET ONE USER WITH ID = " + id,
  });
});

// POST
router.post("/", (req, res) => {
  let { email, password } = req.body;
  console.log(email, password);
  res.json({
    message: "CREATE USER WITH EMAIL = " + email,
  });
});

module.exports = router;
