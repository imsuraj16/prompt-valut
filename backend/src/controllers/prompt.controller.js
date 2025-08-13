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


// const getAllPrompts = async(req,res)=>{
//   const prompts = await promptModel.find();
//   res.status(200).json({
//     msg : 'all prompts fetched',
//     prompts
//   })
// }


const userprompts = async(req,res)=>{

  const prompts = await promptModel.find({owner: req.user._id});
  res.status(200).json({
    msg : 'user prompts fetched',
    prompts
  })
}



const editPrompt = async(req,res)=>{

  const {id} = req.params
  const { title, content, tags } = req.body;
  
  const prompt = await promptModel.findOne({
    owner : req.user._id, _id :id
  })

  if (!prompt) {
    return res.status(404).json({ message: "Prompt not found or not authorized" });
  }

  if (title) prompt.title = title;
  if (content) prompt.content = content;
  if (tags) prompt.tags = tags;

  await prompt.save();

  res.json({
    message: "Prompt updated successfully",
    prompt
  });
  
}

module.exports = {
  createPrompt,
  // getAllPrompts,
  userprompts,
  editPrompt
};
