import mongoose from 'mongoose';
const FootballTeamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    max: 255,
  },
  alias: {
    type: String,
    unique: true,
    required: true,
    max: 55,
  },
  number_of_players: {
    type: Number,
    required: true,
    max: 255,
  },
  captain: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player',
    required: false,
  },
  vice_captain: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player',
    required: false,
  },
  manager: { 
    name:{
      type:String,
      required:true,
    },
    age:{
      type:Number,
      required:true,
      },
    nationality:{
      type:String,
      required:true
    },
 },
  stadium: { 
    name:{
      type:String,
      required: true,
    },
    address:{
      type:String, 
      required: true,
    },
    capacity:{
      type:Number,
      required: true,
    },
   },
  founded_date: {
    type: Date,
    default: Date.now,
    required: true,
  }
  
});

export default mongoose.model('FootBallTeam', FootballTeamSchema);
