const express = require("express");
const { fetchReports, createReports } = require("../controller/reportmanage");
const router = express.Router();
router.get("/", fetchReports);
router.post("/", createReports);
module.exports = router;
