import mongoose from 'mongoose';

const MatchScheduleSchema = new mongoose.Schema({
  opponents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'FootBallTeam' }],
  time: {
    type: String,
    unique: true,
    max: 55,
  },
  result: {
    type: String,
    enum: ['win', 'lose', 'draw'],
  },
  status: {
    type: String,
    enum: ['finished', 'canceled', 'ongoing','pending'],
    default: 'pending',
  },
  
});

export default mongoose.model('MatchSchedule', MatchScheduleSchema);
 