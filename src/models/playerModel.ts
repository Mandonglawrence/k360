import mongoose from 'mongoose';
import { boolean } from 'yargs';

const PlayerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: false,
    max: 255,
  },
  age: {
    type: Number,
    required: true,
    max: 255,
  },
  foot_ball_team: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'FootBallTeam',
  },  
}); 

export default mongoose.model('Player', PlayerSchema);
  