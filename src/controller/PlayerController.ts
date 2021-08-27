import { matchedData } from 'express-validator';
import {Request, Response} from 'express';

import PlayerService from '../services/PlayerService';
class PlayerController {
    PlayerService: any;
  constructor() {
    this.PlayerService = PlayerService;
  }
   
  /**
   *
   */
  async createPlayer(req:Request, res:Response) {
    const {...playerData} = await matchedData(req);


    try {
      const result = await this.PlayerService.addPlayer(playerData);
      res.status(200).json(result);
    } catch (error) {
     console.log(`error`, error)
    }
  }
  async registerPlayerToTeam(req:Request, res:Response) {
    const {...playerData} = await matchedData(req);
//  console.log(`playerData`, playerData)

    try {
      const result = await this.PlayerService.registerPlayerToTeam(playerData);
      res.status(200).json(result);
    } catch (error) {
     console.log(`error`, error)
    }
  }
  async deregisterPlayerToTeam(req:Request, res:Response) {
    const {...playerData} = await matchedData(req);
//  console.log(`playerData`, playerData)

    try {
      const result = await this.PlayerService.deregisterPlayerToTeam(playerData);
      res.status(200).json(result);
    } catch (error) {
     console.log(`error`, error)
    }
  }

  
}

export default new PlayerController();
