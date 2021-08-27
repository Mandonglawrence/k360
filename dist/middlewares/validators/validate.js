"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = validate;
