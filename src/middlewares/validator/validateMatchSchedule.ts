import { check } from 'express-validator';

// eslint-disable-next-line import/prefer-default-export
export const validateMatchSchedule = [
  check('opponents')
    .notEmpty()
    .isArray()
    .withMessage('invalid format for opponents'),
  check('time')
    .optional()
    .isString()
    .withMessage('invalid format for time')
    .trim(),
  check('result')
    .isString()
    .withMessage('invalid format for result')
    .trim(),
  check('status')
    .isString()
    .withMessage('invalid format for status')
    .notEmpty()
    .trim(),
];
export const validateMatchStatus = (key:string)=>(
  [
  check(key)
    .notEmpty()
    .isString()
    .withMessage('invalid format for status')
    .notEmpty()
    .withMessage(' match status cannot be empty')
    .trim(),
  
]);
 
 