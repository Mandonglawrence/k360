"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var validate_1 = require("../middlewares/commonValidators/validate");
var playerVlidator_1 = require("../middlewares/validator/playerVlidator");
var PlayerController_1 = __importDefault(require("../controller/PlayerController"));
var router = express_1.Router();
/** football team */
router.post('/create_player', playerVlidator_1.validatePlayer, validate_1.validate, function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return PlayerController_1.default.createPlayer(args[0], args[1]);
});
router.put('/addplayer_to_team/:playerid/:teamid', playerVlidator_1.validatePlayerId("playerid"), playerVlidator_1.validatePlayerId("teamid"), validate_1.validate, function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return PlayerController_1.default.registerPlayerToTeam(args[0], args[1]);
});
router.put('/removeplayer_from_team/:playerid/:teamid', playerVlidator_1.validatePlayerId("playerid"), playerVlidator_1.validatePlayerId("teamid"), validate_1.validate, function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return PlayerController_1.default.deregisterPlayerToTeam(args[0], args[1]);
});
exports.default = router;
