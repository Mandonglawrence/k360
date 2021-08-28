import { matchedData } from 'express-validator';
import {Request, Response} from 'express';

import FootBallTeamService from '../services/footBallTeamService';
class FootBallTeamController {
  FootBallTeamService: any;
  constructor() {
    this.FootBallTeamService = FootBallTeamService;
  }

  /**
   *
   */ 
  async createTeam(req:Request, res:Response) {
    // console.log(`payload`, req.body)      
    const {...teamData} = await matchedData(req);
    // console.log(`teamData`, teamData)


    try {
      const result = await this.FootBallTeamService.addTeam(teamData);
      res.status(200).json(result);
    } catch (error) {
     console.log(`error`, error)
    }
  }
  /**
   *
   */ 
  async updateTeam(req:Request, res:Response) {
    // console.log(`payload`, req.body)      
    const {...teamData} = await matchedData(req);
    // console.log(`teamData`, teamData)


    try {
      const result = await this.FootBallTeamService.updateTeam(teamData);
      res.status(200).json(result);
    } catch (error) {
     console.log(`error`, error)
    }
  }
  /**
   *
   */ 
  async listTeams(req:Request, res:Response) {
    // console.log(`payload`, req.body)      
    // console.log(`teamData`, teamData)



    try {
      const result = await this.FootBallTeamService.listTeams();
      res.status(200).json(result);
    } catch (error) {
     console.log(`error`, error)
    }
  }
  /**
   *
   */ 
  async listTeamPlayers(req:Request, res:Response) {
    // console.log(`payload`, req.body)      
    // console.log(`teamData`, teamData)
    const {...teamData} = await matchedData(req);


    try {
      const result = await this.FootBallTeamService.listTeamPlayers(teamData);
      res.status(200).json(result);
    } catch (error) {
     console.log(`error`, error)
    }
  }

  
}

export default new FootBallTeamController();
