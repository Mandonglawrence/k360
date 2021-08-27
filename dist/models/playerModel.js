"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var PlayerSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
        unique: false,
        max: 255,
    },
    age: {
        type: Number,
        required: true,
        max: 255,
    },
    foot_ball_team: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'FootBallTeam',
    },
});
exports.default = mongoose_1.default.model('Player', PlayerSchema);
