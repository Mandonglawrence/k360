"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
var routes_1 = __importDefault(require("./routes"));
var PORT = process.env.PORT || 5001;
routes_1.default(app_1.default);
app_1.default.listen(PORT, function () { return console.log("app running on port " + PORT); });
