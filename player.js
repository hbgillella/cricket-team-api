const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  position: { type: String, required: true },
  runs: { type: Number, required: true },
  wickets: { type: Number, required: true },
  team: { type: String, required: true },
  matchesPlayed: { type: Number, required: true }
});

module.exports = mongoose.model('Player', playerSchema);
