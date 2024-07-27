const Query = require('../models/Query');

exports.createQuery = async (req, res) => {
  // console.log(req.body)
  try {
    const { studentId, heading, query, severity } = req.body;
    const newQuery = await Query.create({ studentId, heading, query, severity });
    
    
    const responsePayload = {
      message: 'Query created successfully',
      success: true,
      data: newQuery, 
    };

    res.status(201).json(responsePayload);
  } catch (error) {
    
    res.status(400).json({
      message: 'Failed to create query',
      success: false,
      error: error.message,
    });
  }
};

exports.getAllQueries = async (req, res) => {
  try {
    const queries = await Query.find();
    res.status(200).json({
      message: 'Queries retrieved successfully',
      success: true,
      data: queries,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to retrieve queries',
      success: false,
      error: error.message,
    });
  }
};


exports.getQueryById = async (req, res) => {
  try {
    const query = await Query.findById(req.params.id);
    if (!query) {
      return res.status(404).json({
        message: 'Query not found',
        success: false,
      });
    }
    res.status(200).json({
      message: 'Query retrieved successfully',
      success: true,
      data: query,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to retrieve query',
      success: false,
      error: error.message,
    });
  }
};

exports.updateQueryById = async (req, res) => {
  try {
    const { heading, query, severity, status } = req.body;
    const updatedQuery = await Query.findByIdAndUpdate(
      req.params.id,
      { heading, query, severity, status },
      { new: true, runValidators: true }
    );

    if (!updatedQuery) {
      return res.status(404).json({
        message: 'Query not found',
        success: false,
      });
    }

    res.status(200).json({
      message: 'Query updated successfully',
      success: true,
      data: updatedQuery,
    });
  } catch (error) {
    res.status(400).json({
      message: 'Failed to update query',
      success: false,
      error: error.message,
    });
  }
};

exports.deleteQueryById = async (req, res) => {
  try {
    const deletedQuery = await Query.findByIdAndDelete(req.params.id);
    if (!deletedQuery) {
      return res.status(404).json({
        message: 'Query not found',
        success: false,
      });
    }
    res.status(200).json({
      message: 'Query deleted successfully',
      success: true,
      data: deletedQuery,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to delete query',
      success: false,
      error: error.message,
    });
  }
};
