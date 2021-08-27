import matchScheduleModel from "../models/matchScheduleModel";
class MatchScheduleService  {
    matchScheduleModel:any;
  constructor() {
    this.matchScheduleModel = matchScheduleModel;
  }

  /**
   *
   */
  async addMatchSchedule(matchScheduleData: Record<string, any>){
      try{
        let newMatchSchedule; 
        let message = "";       
         const player = new matchScheduleModel(matchScheduleData);
          newMatchSchedule =  await player.save();
          console.log(`newMatchSchedule`, newMatchSchedule)
          message = "match schedule added successfully";                 
       
       return {newMatchSchedule, message};
   }catch(e){
      console.log(e);
    }
  }  
  /**
   *
   */
  async listMatchSchedule(){
      try{
        let listMatchSchedule; 
        let message = "";       
         
          listMatchSchedule =  await matchScheduleModel.find();
          message = "match schedule added successfully";                 
       
       return {listMatchSchedule, message};
   }catch(e){
      console.log(e);
    }
  }  
  /**
   *
   */
  async updateMatchStatus(matchScheduleData: Record<string, any>){
      try{
        const {status, matchid} = matchScheduleData;
        let updateMatchSchedule; 
        let message = "";       
         
        updateMatchSchedule =  await matchScheduleModel.findByIdAndUpdate({_id:matchid}, {status}, {new: true});
          message = "match status updated successfully";                 
       
       return {updateMatchSchedule, message};
   }catch(e){
      console.log(e);
    }
  }  

  /**
   *
   */
  async updateMatchResult(matchScheduleData: Record<string, any>){
      try{
        const {result, matchid} = matchScheduleData;
        let updateMatchSchedule; 
        let message = "";       
         
        updateMatchSchedule =  await matchScheduleModel.findByIdAndUpdate({_id:matchid}, {result}, {new: true});
          message = "match result updated successfully";                 
       
       return {updateMatchSchedule, message};
   }catch(e){
      console.log(e);
    }
  }  

  
}

export default new MatchScheduleService();
