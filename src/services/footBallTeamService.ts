import teamModel from "../models/teamModel";
import playerModel from "../models/playerModel";
class FootBallTeamService  {
  constructor() {}

  /**
   *
   */
  async addTeam(teamData: Record<string, any>){
      try{
        let newTeam; 
        let message = "";
    const { name, alias } = teamData;
    const matchQuery = { $or:[{name}, {alias}] };
       const teamExist = await teamModel.findOne(matchQuery);
   
       if (teamExist) {
        message = "Team  with specified name or alias already exist";
       } else {
        //    teamData.manager = {};
         const team = new teamModel(teamData);
          newTeam =  await team.save();
          console.log(`newTeam`, newTeam)
          message = "Team added successfully";                 
       }
       return {newTeam, message};
   }catch(e){
      console.log(e);
    }
  } 
  async listTeams(){
  try{
        let teams= await teamModel.find(); 
        let message = "";
         if(teams.length){
        message = "Teams listed successfully";
        return {teams, message};
         }
   }catch(e){
      console.log(e);
    }
  } 
  async listTeamPlayers(teamData: Record<string, any>){
  try{

        let players= await playerModel.find({foot_ball_team: teamData.teamid}); 
        let message = "";
         if(players.length){
        message = "Team's players listed successfully";
        return {players, message};
         }
   }catch(e){ 
      console.log(e);
    }
  } 

   
}

export default new FootBallTeamService();
