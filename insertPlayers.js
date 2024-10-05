const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = require('../config/db');
const Player = require('../models/player');

const players = [
  {
    name: "Virat Kohli",
    age: 35,
    position: "Batsman",
    runs: 12169,
    wickets: 4,
    team: "India",
    matchesPlayed: 254,
  },
  // Add other players here...
];

const insertData = async () => {
  await connectDB();
  await Player.insertMany(players);
  console.log('Players inserted');
  mongoose.connection.close();
};

insertData();
