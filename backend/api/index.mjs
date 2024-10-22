import express from "express";
import connectDB from "./MongodbConnection.mjs";
import dotenv from "dotenv";
import cors from "cors";
import playerRouter from "../routes/player.mjs"; // Ensure this path is correct

dotenv.config();
const PORT = process.env.PORT || 5050;
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json()); // Middleware to parse JSON request bodies
app.use(cors());

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Welcome to the home of mobile esport in africa");
});

app.get("/api", (req, res) => {
  res.send("AMC Database");
});

// Routes
app.use("/api/african", playerRouter);

// Export the app for serverless functions (ES Module syntax)
export default app;
