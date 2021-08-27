"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var validate_1 = require("../middlewares/commonValidators/validate");
var validateFootBallTeam_1 = require("../middlewares/validator/validateFootBallTeam");
var footBallTeamController_1 = __importDefault(require("../controller/footBallTeamController"));
var router = express_1.Router();
/** football team */
router.post('/create_team', validateFootBallTeam_1.validateFootBallTeam, validate_1.validate, function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return footBallTeamController_1.default.createTeam(args[0], args[1]);
});
router.get('/list_team_player/:teamid', validate_1.validateId("teamid"), validate_1.validate, function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return footBallTeamController_1.default.listTeamPlayers(args[0], args[1]);
});
router.get('/list_teams', function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return footBallTeamController_1.default.listTeams(args[0], args[1]);
});
exports.default = router;
