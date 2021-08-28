"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateFootBallTeam = void 0;
var express_validator_1 = require("express-validator");
// eslint-disable-next-line import/prefer-default-export
exports.validateFootBallTeam = [
    express_validator_1.check('name')
        .notEmpty()
        .isString()
        .withMessage('invalid format for name'),
    express_validator_1.check('alias')
        .notEmpty()
        .isString()
        .withMessage('invalid format for alias')
        .trim(),
    express_validator_1.check('number_of_players')
        .notEmpty()
        .isNumeric()
        .withMessage('invalid format for number of players')
        .toUpperCase()
        .trim(),
    express_validator_1.check('captain')
        .optional()
        .isString()
        .withMessage('invalid format for captain')
        .trim(),
    express_validator_1.check('vice_captain')
        .optional()
        .isString()
        .withMessage('invalid format for vice_captain'),
    express_validator_1.check('manager.name')
        .notEmpty()
        .isString()
        .withMessage('invalid format for manager name')
        .trim(),
    express_validator_1.check('manager.age')
        .notEmpty()
        .isNumeric()
        .withMessage('invalid format for manager age')
        .trim(),
    express_validator_1.check('manager.nationality')
        .notEmpty()
        .isString()
        .withMessage('invalid format for manager nationality')
        .trim(),
    express_validator_1.check('stadium.name')
        .notEmpty()
        .isString()
        .withMessage('invalid format for stadium name')
        .trim(),
    express_validator_1.check('stadium.address')
        .notEmpty()
        .isString()
        .withMessage('invalid format for stadium address')
        .trim(),
    express_validator_1.check('stadium.capacity')
        .notEmpty()
        .isNumeric()
        .withMessage('invalid format for stadium capacity')
        .trim(),
];
