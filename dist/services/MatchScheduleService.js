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
var matchScheduleModel_1 = __importDefault(require("../models/matchScheduleModel"));
var MatchScheduleService = /** @class */ (function () {
    function MatchScheduleService() {
        this.matchScheduleModel = matchScheduleModel_1.default;
    }
    /**
     *
     */
    MatchScheduleService.prototype.addMatchSchedule = function (matchScheduleData) {
        return __awaiter(this, void 0, void 0, function () {
            var newMatchSchedule, message, player, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        newMatchSchedule = void 0;
                        message = "";
                        player = new matchScheduleModel_1.default(matchScheduleData);
                        return [4 /*yield*/, player.save()];
                    case 1:
                        newMatchSchedule = _a.sent();
                        console.log("newMatchSchedule", newMatchSchedule);
                        message = "match schedule added successfully";
                        return [2 /*return*/, { newMatchSchedule: newMatchSchedule, message: message }];
                    case 2:
                        e_1 = _a.sent();
                        console.log(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     */
    MatchScheduleService.prototype.listMatchSchedule = function () {
        return __awaiter(this, void 0, void 0, function () {
            var listMatchSchedule, message, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        listMatchSchedule = void 0;
                        message = "";
                        return [4 /*yield*/, matchScheduleModel_1.default.find()];
                    case 1:
                        listMatchSchedule = _a.sent();
                        message = "match schedule added successfully";
                        return [2 /*return*/, { listMatchSchedule: listMatchSchedule, message: message }];
                    case 2:
                        e_2 = _a.sent();
                        console.log(e_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     */
    MatchScheduleService.prototype.updateMatchStatus = function (matchScheduleData) {
        return __awaiter(this, void 0, void 0, function () {
            var status_1, matchid, updateMatchSchedule, message, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        status_1 = matchScheduleData.status, matchid = matchScheduleData.matchid;
                        updateMatchSchedule = void 0;
                        message = "";
                        return [4 /*yield*/, matchScheduleModel_1.default.findByIdAndUpdate({ _id: matchid }, { status: status_1 }, { new: true })];
                    case 1:
                        updateMatchSchedule = _a.sent();
                        message = "match status updated successfully";
                        return [2 /*return*/, { updateMatchSchedule: updateMatchSchedule, message: message }];
                    case 2:
                        e_3 = _a.sent();
                        console.log(e_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     */
    MatchScheduleService.prototype.updateMatchResult = function (matchScheduleData) {
        return __awaiter(this, void 0, void 0, function () {
            var result, matchid, updateMatchSchedule, message, e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        result = matchScheduleData.result, matchid = matchScheduleData.matchid;
                        updateMatchSchedule = void 0;
                        message = "";
                        return [4 /*yield*/, matchScheduleModel_1.default.findByIdAndUpdate({ _id: matchid }, { result: result }, { new: true })];
                    case 1:
                        updateMatchSchedule = _a.sent();
                        message = "match result updated successfully";
                        return [2 /*return*/, { updateMatchSchedule: updateMatchSchedule, message: message }];
                    case 2:
                        e_4 = _a.sent();
                        console.log(e_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return MatchScheduleService;
}());
exports.default = new MatchScheduleService();
