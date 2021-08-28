"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var FootballTeamSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        max: 255,
    },
    alias: {
        type: String,
        unique: true,
        required: true,
        max: 55,
    },
    number_of_players: {
        type: Number,
        required: true,
        max: 255,
    },
    captain: {
        type: String,
        required: false,
    },
    vice_captain: {
        type: String,
        required: false,
    },
    manager: {
        name: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: true,
        },
        nationality: {
            type: String,
            required: true
        },
    },
    stadium: {
        name: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        capacity: {
            type: Number,
            required: true,
        },
    },
    founded_date: {
        type: Date,
        default: Date.now,
        required: true,
    }
});
exports.default = mongoose_1.default.model('FootBallTeam', FootballTeamSchema);
