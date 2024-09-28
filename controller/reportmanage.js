const { getReports } = require("../model/reportmanage");
const fetchReports = async (req, res) => {
  try {
    const reports = await getReports();
    res.status(200).json(reports);
  } catch (error) {
    res.status(400).json({ error: "error while fetching reports" });
  }
};
module.exports = { fetchReports };
