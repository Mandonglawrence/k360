"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePlayerId = exports.validatePlayer = void 0;
var express_validator_1 = require("express-validator");
// eslint-disable-next-line import/prefer-default-export
exports.validatePlayer = [
    express_validator_1.check('name')
        .notEmpty()
        .isString()
        .withMessage('invalid format for name')
        .notEmpty()
        .withMessage('invalid player name cannot be empty')
        .trim(),
    express_validator_1.check('age')
        .isNumeric()
        .withMessage('invalid format for age')
        .trim(),
    express_validator_1.check('foot_ball_team')
        .optional()
        .isMongoId()
        .withMessage('invalid format of foot_ball_team')
        .trim(),
];
var validatePlayerId = function (key) { return ([
    express_validator_1.check(key)
        .notEmpty()
        .isMongoId()
        .withMessage('invalid format for id')
        .notEmpty()
        .withMessage('invalid player name cannot be empty')
        .trim(),
]); };
exports.validatePlayerId = validatePlayerId;
