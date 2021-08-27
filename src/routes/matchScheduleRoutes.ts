import { Router } from 'express';

import {validate,validateId} from '../middlewares/commonValidators/validate';
import {  validateMatchSchedule, validateMatchStatus } from '../middlewares/validator/validateMatchSchedule';
import MatchSheduleController from '../controller/MatchSheduleController';



const router = Router();

/** football team */

router.post(
  '/create_match_schedule',
  validateMatchSchedule,
  validate,
  (...args:any[]) => MatchSheduleController.createMatchSchedule(args[0], args[1])
);

router.put(
  '/update_match_status/:status/:matchid',
  validateMatchStatus("status"),
  validateId("matchid"),
  validate,
  (...args:any[]) => MatchSheduleController.updateMatchStatus(args[0], args[1])
);

router.put(
  '/update_match_result/:result/:matchid',
  validateMatchStatus("result"),
  validateId("matchid"),
  validate,
  (...args:any[]) => MatchSheduleController.updateMatchResult(args[0], args[1])
);

router.get(
  '/list_match_schedule',
  (...args:any[]) => MatchSheduleController.listMatchSchedule(args[0], args[1])
);

export default router; 
 