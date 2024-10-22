import express, { request, response } from 'express';
import connectDB from './MongodbConnection.js'; // Note the .js extension
import dotenv from 'dotenv';
import cors from 'cors'
import playerRouter from '../routes/player.mjs'


dotenv.config();
const PORT = process.env.PORT || 5050;
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json()); // Middleware to parse JSON request bodies
app.use(cors({ origin: 'https://africamobilechamps.vercel.app'}));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("/", (request, response) => {
  response.send("AMC Database");
});

//routes
app.use(playerRouter);


//npm run start:dev 
//To start both servers

