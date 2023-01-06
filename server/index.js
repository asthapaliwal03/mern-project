import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import nodemon from 'nodemon';
import cors from 'cors';
import PostRoutes from './Routes/Post.js';

const app = express();

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use('/post', PostRoutes);
const CONNECTION_URL =
  "mongodb+srv://astha_head_office:astha_head_office123@cluster0.vw5yuas.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 8000;

mongoose.set("strictQuery", false);
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true,useUnifiedTopology:true })
  .then(() => app.listen(PORT,()=>console.log("Server running on port: ",PORT)))
  .catch((error)=>console.log(error.message,));
