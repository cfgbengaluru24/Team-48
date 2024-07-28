const Test = require('../models/Test.js');
const mongoose = require('mongoose');
const Query = require('../models/Query.js');

const getAllTestScores = async (req, res) => {
  try {
    const tests = await Test.find();
    res.json({
      success: true,
      message: "Here are all the tests scores",
      data: tests
    });
  } catch (err) {
    res.status(500).json({ message: err.message, success: false });
  }
};

const getQueryById = async (req, res) => {
    try {
      const queryId = req.params.queryId;
  

      if (!mongoose.Types.ObjectId.isValid(queryId)) {
        return res.status(400).json({success: true, message: 'Invalid query ID format.' });
      }
  
      
      const query = await Query.findById(queryId).populate('student', 'studentId name');
  
      if (!query) {
        return res.status(404).json({ message: 'Query not found.' });
      }
  
      res.json({
        success: true,
        message: "Here is the asked query",
        data: query
      });
    } catch (err) {
      res.status(500).json({ message: err.message, success: false });
    }
  };


const getAllQueries = async (req, res) => {
  try {
    const queries = await Query.find().populate('student', 'studentId name');
    res.json({
      success: true,
      message: "Fetched all queries",
      data: queries
    });
  } catch (err) {
    res.status(500).json({ message: err.message, success: false });
  }
};


const updateQueryStatus = async (req, res) => {
  const { studentId, status } = req.body;
  try {
    const query = await Query.findById(studentId);
    if (!query) {
      return res.status(404).json({ message: 'Query not found!' });
    }
    query.status = status;
    const updatedQuery = await query.save();
    res.json({ message: 'Query status updated successfully!',success: true,data: updatedQuery });
  } catch (err) {
    res.status(400).json({ message: err.message,success: false, });
  }
};

module.exports = {
  getAllTestScores,
  getQueryById,
  getAllQueries,
  updateQueryStatus
};
