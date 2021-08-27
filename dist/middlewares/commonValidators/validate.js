"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateId = exports.validate = void 0;
var express_validator_1 = require("express-validator");
function validate(req, res, next) {
    var errors = express_validator_1.validationResult(req);
    // console.log('REQERR', errors);
    if (errors.isEmpty()) {
        return next();
    }
    var extractedErrors = {};
    // console.log(JSON.stringify(errors.array()));
    errors.array().forEach(function (_a) {
        var param = _a.param, msg = _a.msg;
        extractedErrors[param] = msg;
    });
    return res.status(400).json({
        status: 'Failed',
        message: 'Form has errors',
        errors: extractedErrors,
    });
}
exports.validate = validate;
var validateId = function (key) { return ([
    express_validator_1.check(key)
        .notEmpty()
        .isMongoId()
        .withMessage('invalid format for id')
        .notEmpty()
        .withMessage('invalid player name cannot be empty')
        .trim(),
]); };
exports.validateId = validateId;
