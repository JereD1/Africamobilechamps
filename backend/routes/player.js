import express from "express";
import { Player } from "../mongoose/schemas/player.js"; // Ensure this is the correct import

const router = express.Router();

// Get all players or filter by query
router.get("/players", async (req, res) => {
  const { filter, value } = req.query;

  try {
    let players;

    if (filter && value) {
      players = await Player.find({
        [filter]: { $regex: value, $options: "i" },
      }); // Case insensitive search
    } else {
      players = await Player.find(); // Get all players
    }

    return res.json(players);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }
});

// Add a new player
router.post("/players", async (req, res) => {
  const newPlayer = new Player(req.body);

  try {
    const savedPlayer = await newPlayer.save();
    return res.status(201).json(savedPlayer);
  } catch (err) {
    console.error(err);
    return res.status(400).send(err.message);
  }
});

// Get a player by UID
router.get("/players/:UID", async (req, res) => {
  const { UID } = req.params;

  try {
    const player = await Player.findOne({ UID });
    if (!player) return res.sendStatus(404);
    return res.json(player);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }
});

// Update a player by UID
router.put("/players/:UID", async (req, res) => {
  const { UID } = req.params;

  try {
    const updatedPlayer = await Player.findOneAndUpdate({ UID }, req.body, {
      new: true,
    });
    if (!updatedPlayer) return res.sendStatus(404);
    return res.json(updatedPlayer);
  } catch (error) {
    console.error(error);
    return res.status(400).send(error.message);
  }
});

// Patch a player by UID
router.patch("/players/:UID", async (req, res) => {
  const { UID } = req.params;

  try {
    const updatedPlayer = await Player.findOneAndUpdate(
      { UID },
      { $set: req.body },
      { new: true }
    );
    if (!updatedPlayer) return res.sendStatus(404);
    return res.json(updatedPlayer);
  } catch (error) {
    console.error(error);
    return res.status(400).send(error.message);
  }
});

// Delete a player by UID
router.delete("/players/:UID", async (req, res) => {
  const { UID } = req.params;

  try {
    const deletedPlayer = await Player.findOneAndDelete({ UID });
    if (!deletedPlayer) return res.sendStatus(404);
    return res.sendStatus(200);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }
});

export default router;
