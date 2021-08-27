import { matchedData } from 'express-validator';
import {Request, Response} from 'express';

import MatchScheduleService from '../services/MatchScheduleService';
class MatchSheduleController {
    MatchScheduleService: any;
  constructor() {
    this.MatchScheduleService = MatchScheduleService;
  }

  /**  
   *
   */
  async createMatchSchedule(req:Request, res:Response) {
    const {...matchScheduleData} = await matchedData(req);


    try {
      const result = await this.MatchScheduleService.addMatchSchedule(matchScheduleData);
      res.status(200).json(result);
    } catch (error) {
     console.log(`error`, error)
    }
  }
  /**  
   *
   */
  async listMatchSchedule(req:Request, res:Response) {
    const {...matchScheduleData} = await matchedData(req);


    try {
      const result = await this.MatchScheduleService.listMatchSchedule();
      res.status(200).json(result);
    } catch (error) {
     console.log(`error`, error)
    }
  }
  /**  
   *
   */
  async updateMatchStatus(req:Request, res:Response) {
    const {...matchScheduleData} = await matchedData(req);


    try {
      const result = await this.MatchScheduleService.updateMatchStatus(matchScheduleData);
      res.status(200).json(result);
    } catch (error) {
     console.log(`error`, error)
    }
  }
  /**  
   *
   */
  async updateMatchResult(req:Request, res:Response) {
    const {...matchScheduleData} = await matchedData(req);


    try {
      const result = await this.MatchScheduleService.updateMatchResult(matchScheduleData);
      res.status(200).json(result);
    } catch (error) {
     console.log(`error`, error)
    }
  }

  
}

export default new MatchSheduleController();
