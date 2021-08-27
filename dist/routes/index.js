"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var teamRoutes_1 = __importDefault(require("./teamRoutes"));
var playerRoutes_1 = __importDefault(require("./playerRoutes"));
var matchScheduleRoutes_1 = __importDefault(require("./matchScheduleRoutes"));
function initializeRoutes(app) {
    app.use('/api/v1/auth', teamRoutes_1.default);
    app.use('/api/v1/auth', playerRoutes_1.default);
    app.use('/api/v1/auth', matchScheduleRoutes_1.default);
}
exports.default = initializeRoutes;
;
