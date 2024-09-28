const { getReports, postReports } = require("../model/reportmanage");
const fetchReports = async (req, res) => {
  try {
    const reports = await getReports();
    res.status(200).json(reports);
  } catch (error) {
    res.status(400).json({ error: "error while fetching reports" });
  }
};
const createReports = async (req, res) => {
  try {
    const { reports } = req.body;
    const newReport = { reports };
    const report = await postReports(newReport);
    res.status(201).json(report);
  } catch (error) {
    res.status(400).json({ error: "error while inserting reports" });
  }
};
module.exports = { fetchReports, createReports };
