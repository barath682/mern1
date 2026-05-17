const express = require("express");
const router = express.Router();
const deleteUser = require("../controllers/deleteUser");

// DELETE user
router.delete("/delete/:id", deleteUser);

module.exports = router;