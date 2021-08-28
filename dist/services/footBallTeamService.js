"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var teamModel_1 = __importDefault(require("../models/teamModel"));
var playerModel_1 = __importDefault(require("../models/playerModel"));
var FootBallTeamService = /** @class */ (function () {
    function FootBallTeamService() {
    }
    /**
     *
     */
    FootBallTeamService.prototype.addTeam = function (teamData) {
        return __awaiter(this, void 0, void 0, function () {
            var newTeam, message, name_1, alias, matchQuery, teamExist, team, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        newTeam = void 0;
                        message = "";
                        name_1 = teamData.name, alias = teamData.alias;
                        matchQuery = { $or: [{ name: name_1 }, { alias: alias }] };
                        return [4 /*yield*/, teamModel_1.default.findOne(matchQuery)];
                    case 1:
                        teamExist = _a.sent();
                        if (!teamExist) return [3 /*break*/, 2];
                        message = "Team  with specified name or alias already exist";
                        return [3 /*break*/, 4];
                    case 2:
                        team = new teamModel_1.default(teamData);
                        return [4 /*yield*/, team.save()];
                    case 3:
                        newTeam = _a.sent();
                        console.log("newTeam", newTeam);
                        message = "Team added successfully";
                        _a.label = 4;
                    case 4: return [2 /*return*/, { newTeam: newTeam, message: message }];
                    case 5:
                        e_1 = _a.sent();
                        console.log(e_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     */
    FootBallTeamService.prototype.updateTeam = function (teamData) {
        return __awaiter(this, void 0, void 0, function () {
            var captain, vice_captain, updatedTeam, message, teamid, matchQuery, teamExist, _id, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 16, , 17]);
                        captain = void 0;
                        vice_captain = void 0;
                        updatedTeam = {};
                        message = "Team updated successfully";
                        teamid = teamData.teamid;
                        matchQuery = { _id: teamid };
                        return [4 /*yield*/, teamModel_1.default.findOne(matchQuery).select("-_id -__v")];
                    case 1:
                        teamExist = _a.sent();
                        if (!teamExist._doc) return [3 /*break*/, 14];
                        teamData = __assign(__assign({}, teamExist._doc), teamData);
                        _id = teamData.teamid;
                        if (!(teamData.captain || teamData.vice_captain)) return [3 /*break*/, 11];
                        if (!teamData.captain) return [3 /*break*/, 5];
                        return [4 /*yield*/, playerModel_1.default.findOne({ name: teamData.captain })];
                    case 2:
                        captain = _a.sent();
                        if (!(teamData.captain && captain.foot_ball_team == teamid)) return [3 /*break*/, 3];
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, delete teamData.captain];
                    case 4:
                        _a.sent();
                        message = (teamData.vice_captain) ? "captain not found in team's players and hence, not added" : "Team updated successfully";
                        _a.label = 5;
                    case 5:
                        if (!teamData.vice_captain) return [3 /*break*/, 9];
                        return [4 /*yield*/, playerModel_1.default.findOne({ name: teamData.vice_captain })];
                    case 6:
                        vice_captain = _a.sent();
                        if (!(teamData.vice_captain && vice_captain.foot_ball_team == teamid)) return [3 /*break*/, 7];
                        return [3 /*break*/, 9];
                    case 7:
                        message = (teamData.vice_captain) ? "vice_captain not found in team's players and hence, not added" : "Team updated successfully";
                        return [4 /*yield*/, delete teamData.vice_captain];
                    case 8:
                        _a.sent();
                        _a.label = 9;
                    case 9: return [4 /*yield*/, teamModel_1.default.findByIdAndUpdate({ _id: _id }, __assign({}, teamData), { new: true })];
                    case 10:
                        updatedTeam = _a.sent();
                        return [3 /*break*/, 13];
                    case 11:
                        delete teamData.teamid;
                        delete teamData.number_of_players;
                        delete teamData._id;
                        message = "Team updated successfully";
                        return [4 /*yield*/, teamModel_1.default.findByIdAndUpdate({ _id: _id }, __assign({}, teamData), { new: true })];
                    case 12:
                        updatedTeam = _a.sent();
                        _a.label = 13;
                    case 13: return [3 /*break*/, 15];
                    case 14:
                        message = "Team  with specified name or alias does not exist";
                        _a.label = 15;
                    case 15: return [2 /*return*/, { updatedTeam: updatedTeam, message: message }];
                    case 16:
                        e_2 = _a.sent();
                        // console.log(e.message);
                        return [2 /*return*/, { message: e_2.message.includes("duplicate") ? "team name / alias already exists, please chose a different" : "something went wrong, make sure captain / vice captain is/are in the team's players" }];
                    case 17: return [2 /*return*/];
                }
            });
        });
    };
    FootBallTeamService.prototype.listTeams = function () {
        return __awaiter(this, void 0, void 0, function () {
            var teams, message, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, teamModel_1.default.find()];
                    case 1:
                        teams = _a.sent();
                        message = "";
                        if (teams.length) {
                            message = "Teams listed successfully";
                            return [2 /*return*/, { teams: teams, message: message }];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_3 = _a.sent();
                        console.log(e_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FootBallTeamService.prototype.listTeamPlayers = function (teamData) {
        return __awaiter(this, void 0, void 0, function () {
            var players, message, e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, playerModel_1.default.find({ foot_ball_team: teamData.teamid })];
                    case 1:
                        players = _a.sent();
                        message = "";
                        if (players.length) {
                            message = "Team's players listed successfully";
                            return [2 /*return*/, { players: players, message: message }];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_4 = _a.sent();
                        console.log(e_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return FootBallTeamService;
}());
exports.default = new FootBallTeamService();
