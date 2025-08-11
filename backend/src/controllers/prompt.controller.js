const promptModel = require('../models/prompt.model');
const generateTag = require('../service/ai.service');

const createPrompt = async (req, res) => {
  try {
    const { title, promptText, tags } = req.body;

    const tag = await generateTag(promptText);

 
    const newPrompt = await promptModel.create({
      title,
      promptText,
      tags: tag,
      owner: req.user._id
    });

    res.status(201).json({
      msg: 'Prompt created successfully',
      newPrompt
    });

  } catch (error) {
    console.error("Error creating prompt:", error.message);
    res.status(500).json({
      msg: 'Server error while creating prompt',
      error: error.message
    });
  }
};

module.exports = {
  createPrompt
};
