const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const csvParser = require("csv-parser");
const fs = require("fs");
const Feedback = require('../models/Feedback');
// Adjust the path as necessary
const { Configuration, OpenAIApi } = require("openai");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require("dotenv");
dotenv.config();
const upload = require("../utils/fileUpload");
const router = express.Router();

const genAI = new GoogleGenerativeAI(process.env.OPENAI_API_KEY);
const model = genAI.getGenerativeModel({model: 'gemini-1.5-flash'});

const bulkAddFeedback = async(req,res) => {
  try {
    if(!req.file){
      throw new Error({
        success: false,
        message: "No file given"
      })
    }
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
          try
          {await feedback.save();}catch(err){
            console.error("Error while saving a query",err);
          }
        }

        // Summarize the additional feedback
        const prompt = `
          Here are some additional feedbacks provided by students:
          ${additionalFeedbacks.join("\n")}
          Please provide a concise summary of the feedbacks above.
        `;

        const genAiResult = await model.generateContent(prompt);
        const genAiResponse = await genAiResult.response;
        const text = genAiResponse.text();
        console.log(text);
        res.status(200).json({
          success: true,
          message: "File processed successfully",
          data: {
            averageWeekNo: avgWeekNo,
            additionalFeedbacks,
            summary: text,
          }
        });
      });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'File not given! or some other error', success: false });
  }
}

module.exports = {
  bulkAddFeedback
}
