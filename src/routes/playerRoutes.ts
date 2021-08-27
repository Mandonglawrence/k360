import { Router } from 'express';

import {validate} from '../middlewares/commonValidators/validate';
import {  validatePlayer, validatePlayerId } from '../middlewares/validator/playerVlidator';
import PlayerController from '../controller/PlayerController';



const router = Router();

/** football team */

router.post(
  '/create_player',
  validatePlayer,
  validate,
  (...args:any[]) => PlayerController.createPlayer(args[0], args[1])
);
router.put(
  '/addplayer_to_team/:playerid/:teamid', 
  validatePlayerId("playerid"),
  validatePlayerId("teamid"),
  validate,
  (...args:any[]) => PlayerController.registerPlayerToTeam(args[0], args[1])
);

router.put(
  '/removeplayer_from_team/:playerid/:teamid', 
  validatePlayerId("playerid"),
  validatePlayerId("teamid"),
  validate,
  (...args:any[]) => PlayerController.deregisterPlayerToTeam(args[0], args[1])
);

 
export default router;
