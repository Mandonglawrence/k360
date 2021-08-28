import { Router } from 'express';

import {validate, validateId} from '../middlewares/commonValidators/validate';
import { validateFootBallTeam } from '../middlewares/validator/validateFootBallTeam';
import FootBallTeamController from '../controller/footBallTeamController';



const router = Router();

/** football team */

router.post(
  '/create_team',
  validateFootBallTeam,
  validate,
  (...args:any[]) => FootBallTeamController.createTeam(args[0], args[1])
);
router.put(
  '/update_team/:teamid',
  validateFootBallTeam,
  validateId("teamid"),
  validate,
  (...args:any[]) => FootBallTeamController.updateTeam(args[0], args[1])
);

router.get(
  '/list_team_player/:teamid',
  validateId("teamid"),
  validate,
  (...args:any[]) => FootBallTeamController.listTeamPlayers(args[0], args[1])
);

router.get(
  '/list_teams',
  (...args:any[]) => FootBallTeamController.listTeams(args[0], args[1])
);

export default router;
  