"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var validate_1 = require("../middlewares/commonValidators/validate");
var validateMatchSchedule_1 = require("../middlewares/validator/validateMatchSchedule");
var MatchSheduleController_1 = __importDefault(require("../controller/MatchSheduleController"));
var router = express_1.Router();
/** football team */
router.post('/create_match_schedule', validateMatchSchedule_1.validateMatchSchedule, validate_1.validate, function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return MatchSheduleController_1.default.createMatchSchedule(args[0], args[1]);
});
router.put('/update_match_status/:status/:matchid', validateMatchSchedule_1.validateMatchStatus("status"), validate_1.validateId("matchid"), validate_1.validate, function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return MatchSheduleController_1.default.updateMatchStatus(args[0], args[1]);
});
router.put('/update_match_result/:result/:matchid', validateMatchSchedule_1.validateMatchStatus("result"), validate_1.validateId("matchid"), validate_1.validate, function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return MatchSheduleController_1.default.updateMatchResult(args[0], args[1]);
});
router.get('/list_match_schedule', function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return MatchSheduleController_1.default.listMatchSchedule(args[0], args[1]);
});
exports.default = router;
