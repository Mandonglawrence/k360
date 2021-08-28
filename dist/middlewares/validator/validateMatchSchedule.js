"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateMatchResult = exports.validateMatchStatus = exports.validateMatchSchedule = void 0;
var express_validator_1 = require("express-validator");
// eslint-disable-next-line import/prefer-default-export
exports.validateMatchSchedule = [
    express_validator_1.check('opponents')
        .notEmpty()
        .isArray()
        .withMessage('invalid format for opponents'),
    express_validator_1.check('time')
        .optional()
        .isString()
        .withMessage('invalid format for time')
        .trim(),
    express_validator_1.check('result')
        .isString()
        .withMessage('invalid format for result')
        .trim()
        .toLowerCase()
        .isIn(['win', 'lose', 'draw'])
        .withMessage('Invalid \'result\'. Acceptable types: [\'win\', \'lose\', \'draw\'] '),
    express_validator_1.check('status')
        .isString()
        .withMessage('invalid format for status')
        .notEmpty()
        .trim()
        .toLowerCase()
        .isIn(['finished', 'canceled', 'postponed', 'ongoing', 'pending'])
        .withMessage('Invalid \'status\'. Acceptable types: [\'finished\', \'canceled\', \'postponed\', \'ongoing\', \'pending\'] ')
];
var validateMatchStatus = function (key) { return ([
    express_validator_1.check(key)
        .notEmpty()
        .isString()
        .withMessage('invalid format for status')
        .notEmpty()
        .withMessage(' match status cannot be empty')
        .toLowerCase()
        .trim()
        .isIn(['win', 'lose', 'draw'])
        .withMessage('Invalid \'result\'. Acceptable types: [\'win\', \'lose\', \'draw\'] ')
]); };
exports.validateMatchStatus = validateMatchStatus;
var validateMatchResult = function (key) { return ([
    express_validator_1.check(key)
        .notEmpty()
        .isString()
        .withMessage('invalid format for status')
        .notEmpty()
        .withMessage(' match status cannot be empty')
        .toLowerCase()
        .trim()
        .toLowerCase()
        .isIn(['finished', 'canceled', 'postponed', 'ongoing', 'pending'])
        .withMessage('Invalid \'status\'. Acceptable types: [\'finished\', \'canceled\', \'postponed\', \'ongoing\', \'pending\'] ')
]); };
exports.validateMatchResult = validateMatchResult;
