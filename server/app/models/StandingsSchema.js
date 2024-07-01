import mongoose from "mongoose";

const GoalsSchema = new mongoose.Schema({
  for: Number,
  against: Number,
});

const RecordSchema = new mongoose.Schema({
  played: Number,
  win: Number,
  draw: Number,
  lose: Number,
  goals: GoalsSchema,
});

const TeamSchema = new mongoose.Schema({
  id: Number,
  name: String,
  logo: String,
});

const StandingsSchema = new mongoose.Schema({
  rank: Number,
  team: TeamSchema,
  points: Number,
  goalsDiff: Number,
  group: String,
  form: String,
  status: String,
  description: String,
  all: RecordSchema,
  home: RecordSchema,
  away: RecordSchema,
  update: Date,
});

StandingsSchema.statics.updateByTeamId = async function (teamId, updateData) {
  return this.findOneAndUpdate({ "team.id": teamId }, updateData, { new: true, upsert: true });
};

export default mongoose.model("Standings", StandingsSchema);
