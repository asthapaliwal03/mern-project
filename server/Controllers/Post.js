import PostMessage from "../Models/PostMessage.js";

export const getPost = async (req, res) => {
  //   res.send("this is working");
  try {
    const postMessage = await PostMessage.find();
    console.log(postMessage);
    res.status(200).json(postMessage);
  } catch (error) {
    res.status(404).json({message:error.message});
    console.log(error.message);
  }
};

export const createPost = async(req, res) => {
 // res.send("Create post");
 const post =req.body;
 const newPost =new PostMessage(post);

 try {
  await newPost.save();
  res.status(201).json(newPost);
} catch (error) {
  res.status(409).json({message:error.message});
  console.log(error.message);
}
};
