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
    const { heading, body } = req.body;
    const figure = req.file?.filename;
    console.log(figure, "figure file");
    const newReport = { heading, body, figure };
    const report = await postReports(newReport);
    res.status(201).json(report); // Respond with the inserted data
  } catch (error) {
    console.error("Error while inserting reports:", error);
    res.status(400).json({ error: "Error while inserting reports" });
  }
};

module.exports = { fetchReports, createReports };
