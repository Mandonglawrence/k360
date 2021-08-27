"use strict";
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
var playerModel_1 = __importDefault(require("../models/playerModel"));
var teamModel_1 = __importDefault(require("../models/teamModel"));
var PlayerService = /** @class */ (function () {
    function PlayerService() {
        this.playerModel = playerModel_1.default;
        this.teamModel = teamModel_1.default;
    }
    /**
     *
     */
    PlayerService.prototype.addPlayer = function (playerData) {
        return __awaiter(this, void 0, void 0, function () {
            var newPlayer, message, name_1, matchQuery, playerExist, player, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        newPlayer = void 0;
                        message = "";
                        name_1 = playerData.name;
                        matchQuery = { name: name_1 };
                        return [4 /*yield*/, playerModel_1.default.findOne(matchQuery)];
                    case 1:
                        playerExist = _a.sent();
                        if (!playerExist) return [3 /*break*/, 2];
                        message = "player  with specified name or alias already exist";
                        return [3 /*break*/, 4];
                    case 2:
                        player = new playerModel_1.default(playerData);
                        return [4 /*yield*/, player.save()];
                    case 3:
                        newPlayer = _a.sent();
                        console.log("newPlayer", newPlayer);
                        if (newPlayer) {
                            message = "player added successfully";
                        }
                        _a.label = 4;
                    case 4: return [2 /*return*/, { newPlayer: newPlayer, message: message }];
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
    PlayerService.prototype.registerPlayerToTeam = function (playerData) {
        return __awaiter(this, void 0, void 0, function () {
            var playerid, teamid, updatedPlayer, message, team, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        playerid = playerData.playerid, teamid = playerData.teamid;
                        console.log(playerid, teamid);
                        updatedPlayer = void 0;
                        message = "";
                        return [4 /*yield*/, playerModel_1.default.findOne({ _id: playerid })];
                    case 1:
                        updatedPlayer = _a.sent();
                        console.log("player", updatedPlayer);
                        if (!(updatedPlayer.foot_ball_team && (updatedPlayer.foot_ball_team == teamid))) return [3 /*break*/, 2];
                        message = "player already registered to the team";
                        return [2 /*return*/, { updatedPlayer: updatedPlayer, message: message }];
                    case 2: return [4 /*yield*/, playerModel_1.default.findOneAndUpdate({ _id: playerid }, { foot_ball_team: teamid }, { new: true })];
                    case 3:
                        updatedPlayer = _a.sent();
                        if (!updatedPlayer) return [3 /*break*/, 5];
                        message = "player added to a team successfully";
                        return [4 /*yield*/, teamModel_1.default.findById({ _id: teamid })];
                    case 4:
                        team = _a.sent();
                        team.number_of_players++;
                        team.save();
                        return [2 /*return*/, { updatedPlayer: updatedPlayer, message: message }];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        e_2 = _a.sent();
                        console.log(e_2);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     */
    PlayerService.prototype.deregisterPlayerToTeam = function (playerData) {
        return __awaiter(this, void 0, void 0, function () {
            var playerid, teamid, updatedPlayer, message, team, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        playerid = playerData.playerid, teamid = playerData.teamid;
                        console.log(playerid, teamid);
                        updatedPlayer = void 0;
                        message = "";
                        return [4 /*yield*/, playerModel_1.default.findOne({ _id: playerid })];
                    case 1:
                        updatedPlayer = _a.sent();
                        if (!(updatedPlayer.foot_ball_team && (updatedPlayer.foot_ball_team == teamid))) return [3 /*break*/, 4];
                        message = "player already registered to the team";
                        return [4 /*yield*/, teamModel_1.default.findById({ _id: teamid })];
                    case 2:
                        team = _a.sent();
                        team.number_of_players--;
                        team.save();
                        return [4 /*yield*/, playerModel_1.default.findOneAndUpdate({ _id: playerid }, { foot_ball_team: null }, { new: true })];
                    case 3:
                        updatedPlayer = _a.sent();
                        if (updatedPlayer) {
                            message = "player added to a team successfully";
                            return [2 /*return*/, { updatedPlayer: updatedPlayer, message: message }];
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        message = "player not registered to the team";
                        return [2 /*return*/, { updatedPlayer: updatedPlayer, message: message }];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        e_3 = _a.sent();
                        console.log(e_3);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    return PlayerService;
}());
exports.default = new PlayerService();
