const express = require("express");
const { fetchReports } = require("../controller/reportmanage");
const router = express.Router();
router.get("/", fetchReports);
module.exports = router;
