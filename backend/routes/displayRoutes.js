const express = require("express");
const router = express.Router();

const { getUsers } = require("../controllers/displayController");

router.get("/users", getUsers);

module.exports = router;