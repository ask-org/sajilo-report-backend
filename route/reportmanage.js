const express = require("express");
const { fetchReports, createReports } = require("../controller/reportmanage");
const router = express.Router();
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.get("/", fetchReports);
router.post("/", upload.single("figure"), createReports);

module.exports = router;
