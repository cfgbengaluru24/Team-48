const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const csvParser = require("csv-parser");
const fs = require("fs");
const Feedback = require("./models/Feedback"); // Adjust the path as necessary
const { Configuration, OpenAIApi } = require("openai");
const dotenv = require("dotenv");
dotenv.config();

const router = express.Router();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, // Make sure to set this environment variable
});
const openai = new OpenAIApi(configuration);

router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const fileRows = [];
    const additionalFeedbacks = [];
    const weekNumbers = [];

    fs.createReadStream(req.file.path)
      .pipe(csvParser())
      .on("data", (row) => {
        fileRows.push(row);
        additionalFeedbacks.push(row.additionalFeedback);
        weekNumbers.push(Number(row.weekNo));
      })
      .on("end", async () => {
        fs.unlinkSync(req.file.path); // remove temp file

        const avgWeekNo =
          weekNumbers.reduce((acc, curr) => acc + curr, 0) / weekNumbers.length;

        for (const row of fileRows) {
          const feedback = new Feedback({
            studentId: row.studentId,
            weekNo: Number(row.weekNo),
            lectureName: row.lectureName,
            feedback: row.feedback,
            additionalFeedback: row.additionalFeedback,
          });
          await feedback.save();
        }

        // Summarize the additional feedback
        const prompt = `
          Here are some additional feedbacks provided by students:
          ${additionalFeedbacks.join("\n")}
          Please provide a concise summary of the feedbacks above.
        `;

        const summaryResponse = await openai.createCompletion({
          model: "text-davinci-003",
          prompt: prompt,
          max_tokens: 150,
        });

        const summary = summaryResponse.data.choices[0].text.trim();

        res.status(200).json({
          message: "File processed successfully",
          averageWeekNo: avgWeekNo,
          additionalFeedbacks,
          summary,
        });
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
