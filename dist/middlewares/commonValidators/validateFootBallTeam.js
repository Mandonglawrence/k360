"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEditAddress = exports.validateCreateAddress = void 0;
var express_validator_1 = require("express-validator");
// eslint-disable-next-line import/prefer-default-export
exports.validateCreateAddress = [
    express_validator_1.check('userId')
        .isMongoId()
        .withMessage('invalid format for userId'),
    express_validator_1.check('address')
        .notEmpty()
        .isString()
        .withMessage('invalid format for address')
        .trim(),
    express_validator_1.check('address_title')
        .notEmpty()
        .isString()
        .withMessage('invalid format for address_title')
        .toUpperCase()
        .trim(),
    express_validator_1.check('landmark')
        .optional()
        .notEmpty()
        .isString()
        .withMessage('invalid format for landmark')
        .trim(),
    express_validator_1.check('location')
        .optional()
        .isObject(),
    express_validator_1.check('location.coordinates')
        .optional()
        .isLatLong()
        .trim(),
    express_validator_1.check('location.country')
        .optional()
        .isString()
        .trim(),
    express_validator_1.check('location.city')
        .optional()
        .isString()
        .trim(),
    express_validator_1.check('location.address')
        .optional()
        .isString()
        .trim(),
];
exports.validateEditAddress = [
    express_validator_1.check('address')
        .optional()
        .notEmpty()
        .isString()
        .withMessage('invalid format for address')
        .trim(),
    express_validator_1.check('address_title')
        .optional()
        .notEmpty()
        .isString()
        .withMessage('invalid format for address_title')
        .toUpperCase()
        .trim(),
    express_validator_1.check('landmark')
        .optional()
        .notEmpty()
        .isString()
        .withMessage('invalid format for landmark')
        .trim(),
    express_validator_1.check('location')
        .optional()
        .isObject(),
    express_validator_1.check('location.coordinates')
        .optional()
        .isLatLong()
        .trim(),
    express_validator_1.check('location.country')
        .optional()
        .isString()
        .trim(),
    express_validator_1.check('location.city')
        .optional()
        .isString()
        .trim(),
    express_validator_1.check('location.address')
        .optional()
        .isString()
        .trim(),
];
