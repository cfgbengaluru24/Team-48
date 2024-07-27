const Test = require('../models/Test');
// const Student = require('../models/Student');
const Query = require('../models/Query');

const getAllTestScores = async (req, res) => {
  try {
    const tests = await Test.find().populate('Student', 'studentId name');
    res.json(tests);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getQueryById = async (req, res) => {
    try {
      const queryId = req.params.queryId;
  

      if (!mongoose.Types.ObjectId.isValid(queryId)) {
        return res.status(400).json({ message: 'Invalid query ID format.' });
      }
  
      
      const query = await Query.findById(queryId).populate('student', 'studentId name');
  
      if (!query) {
        return res.status(404).json({ message: 'Query not found.' });
      }
  
      res.json(query);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };


const getAllQueries = async (req, res) => {
  try {
    const queries = await Query.find().populate('student', 'studentId name');
    res.json(queries);
  } catch (err) {
    res.status(500).json({ message: err.message });
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
    await query.save();
    res.json({ message: 'Query status updated successfully!' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getAllTestScores,
  getQueryById,
  getAllQueries,
  updateQueryStatus
};
