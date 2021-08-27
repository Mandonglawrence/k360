"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var MatchScheduleSchema = new mongoose_1.default.Schema({
    opponents: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: 'FootBallTeam' }],
    time: {
        type: String,
        unique: true,
        max: 55,
    },
    result: {
        type: String,
        enum: ['win', 'lose', 'draw'],
    },
    status: {
        type: String,
        enum: ['finished', 'canceled', 'ongoing', 'pending'],
        default: 'pending',
    },
});
exports.default = mongoose_1.default.model('MatchSchedule', MatchScheduleSchema);
