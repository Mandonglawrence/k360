import playerModel from "../models/playerModel";
import teamModel from "../models/teamModel";
class PlayerService  {
    playerModel:any;
    teamModel:any;
  constructor() {
    this.playerModel = playerModel;
    this.teamModel = teamModel;
  }

  /**
   *
   */
  async addPlayer(playerData: Record<string, any>){
      try{
        let newPlayer:any; 
        let message = "";
    const { name } = playerData;
    const matchQuery = { name };
       const playerExist = await playerModel.findOne(matchQuery);
   
       if (playerExist) {
        message = "player  with specified name or alias already exist";
       } else {
         const player = new playerModel(playerData);
          newPlayer =  await player.save();
          console.log(`newPlayer`, newPlayer)
        if(newPlayer){
                  message = "player added successfully";                 
                }
       } 
       return {newPlayer, message};
   }catch(e){
      console.log(e);
    }
  } 
  /**
   *
   */
  async registerPlayerToTeam(playerData: Record<string, any>){
      try{
        const { playerid, teamid } = playerData;
        console.log(playerid, teamid);
        
        let updatedPlayer:any; 
        let message = "";
        updatedPlayer = await playerModel.findOne({_id: playerid});
        console.log(`player`, updatedPlayer)
        if(updatedPlayer.foot_ball_team && (updatedPlayer.foot_ball_team == teamid)){
          message = "player already registered to the team";
          return {updatedPlayer, message};
        }
        else{
        updatedPlayer =  await playerModel.findOneAndUpdate(
            { _id: playerid },
           { foot_ball_team: teamid }
           ,{new: true}
           );
        if(updatedPlayer){
            message = "player added to a team successfully";                 
           let team = await teamModel.findById({ _id: teamid });
           team.number_of_players++;
           team.save();
          return {updatedPlayer, message};
        }
      }
   }catch(e){
      console.log(e);
    }
  } 
  /**
   *
   */
  async deregisterPlayerToTeam(playerData: Record<string, any>){
      try{
        const { playerid, teamid } = playerData;
        console.log(playerid, teamid);
        
        let updatedPlayer:any; 
        let message = "";


        updatedPlayer = await playerModel.findOne({_id: playerid});

        if(updatedPlayer.foot_ball_team && (updatedPlayer.foot_ball_team == teamid)){

          message = "player already registered to the team";

          let team = await teamModel.findById({ _id: teamid });
           team.number_of_players--;
           team.save();

           updatedPlayer =  await playerModel.findOneAndUpdate(
               { _id: playerid },
              { foot_ball_team: null }
              ,{new: true}
              );

           if(updatedPlayer){
               message = "player added to a team successfully";                 
              
             return {updatedPlayer, message};
           }
          }

          else{
          message = "player not registered to the team";
          return {updatedPlayer, message};
      }
   }catch(e){
      console.log(e);
    }
  } 

  
}

export default new PlayerService();
