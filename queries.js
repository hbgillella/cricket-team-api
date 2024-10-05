const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = require('../config/db');
const Player = require('../models/player');

const runQueries = async () => {
  await connectDB();

  // Query 1: Find all players from India
  const playersFromIndia = await Player.find({ team: "India" });
  console.log('Players from India:', playersFromIndia);

  // Query 2: Find a player by name
  const player = await Player.findOne({ name: "Ben Stokes" });
  console.log('Player found:', player);

  // Query 3: Find players who have scored more than 5000 runs
  const highScorers = await Player.find({ runs: { $gt: 5000 } });
  console.log('Players with more than 5000 runs:', highScorers);

  // Query 4: Update a player's runs
  const updatedPlayer = await Player.findOneAndUpdate(
    { name: "Virat Kohli" },
    { $set: { runs: 12200 } },
    { new: true }
  );
  console.log('Updated player:', updatedPlayer);

  // Query 5: Delete a player
  const deletedPlayer = await Player.findOneAndDelete({ name: "Steve Smith" });
  console.log('Deleted player:', deletedPlayer);

  mongoose.connection.close();
};

runQueries();
