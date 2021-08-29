"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var supertest_1 = __importDefault(require("supertest"));
var mongoose_1 = __importDefault(require("mongoose"));
var app_1 = __importDefault(require("../app"));
var request = supertest_1.default(app_1.default);
function close() {
    afterAll(function (done) {
        // Closing the DB connection allows Jest to exit successfully.
        done();
        return mongoose_1.default.connection.close();
    });
}
close();
