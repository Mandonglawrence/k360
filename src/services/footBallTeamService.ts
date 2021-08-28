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
  /**
   *
   */
  async updateTeam(teamData: Record<string, any>){
      try{
        let captain;
        let vice_captain;
        let updatedTeam = {}; 
        let message = "Team updated successfully";
    const { teamid } = teamData;
    const matchQuery = { _id: teamid };
    const teamExist = await teamModel.findOne(matchQuery).select("-_id -__v");

    if (teamExist._doc) {
      teamData = {...teamExist._doc, ...teamData};
      let _id = teamData.teamid;

      if(teamData.captain || teamData.vice_captain){
        if(teamData.captain){

          captain = await playerModel.findOne(
              {name: teamData.captain}
              );
              
              if(teamData.captain && captain.foot_ball_team == teamid ){}
              else {
                await delete teamData.captain;
                message =(teamData.vice_captain)?  "captain not found in team's players and hence, not added":"Team updated successfully";
              }
            }

            if(teamData.vice_captain){
          vice_captain = await playerModel.findOne(
              {name: teamData.vice_captain}
              );

          if(teamData.vice_captain && vice_captain.foot_ball_team == teamid ){                
          }
          else {
            message =(teamData.vice_captain)? "vice_captain not found in team's players and hence, not added":"Team updated successfully";
            await delete teamData.vice_captain;
          }
        }
          
          updatedTeam =  await teamModel.findByIdAndUpdate({_id},{...teamData},{new: true});

          }else{

            delete teamData.teamid; 
            delete teamData.number_of_players; 
            delete teamData._id; 
      
          
            message = "Team updated successfully";                 
            updatedTeam =  await teamModel.findByIdAndUpdate({_id},{...teamData},{new: true});
          }
      

    } else {
        message = "Team  with specified name or alias does not exist";
      }
       return {updatedTeam, message};
   }catch(e){
      // console.log(e.message);
      
      return {message:e.message.includes("duplicate")? "team name / alias already exists, please chose a different":"something went wrong, make sure captain / vice captain is/are in the team's players"}
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
