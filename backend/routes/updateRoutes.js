const express = require("express");
const router = express.Router();
const updateUser = require("../controllers/updateUser");

// UPDATE user
router.put("/update/:id", updateUser);

module.exports = router;