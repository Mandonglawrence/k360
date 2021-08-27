import { check } from 'express-validator';
import { Mongoose } from 'mongoose';

// eslint-disable-next-line import/prefer-default-export
export const validatePlayer = [
  check('name')
    .notEmpty()
    .isString()
    .withMessage('invalid format for name')
    .notEmpty()
    .withMessage('invalid player name cannot be empty')
    .trim(),
  check('age')
    .isNumeric()
    .withMessage('invalid format for age')
    .trim(),
  check('foot_ball_team')
    .optional()
    .isMongoId()
    .withMessage('invalid format of foot_ball_team')
    .trim(),
];
export const validatePlayerId = (key:string)=>(
  [
  check(key)
    .notEmpty()
    .isMongoId()
    .withMessage('invalid format for id')
    .notEmpty()
    .withMessage('invalid player name cannot be empty')
    .trim(),
  
]);
 
 