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
    .trim()
    .toLowerCase()
    .isIn(['win', 'lose', 'draw'])
    .withMessage('Invalid \'result\'. Acceptable types: [\'win\', \'lose\', \'draw\'] '),
  check('status')
    .isString()
    .withMessage('invalid format for status')
    .notEmpty()
    .trim()
    .toLowerCase()
    .isIn(['finished', 'canceled', 'postponed', 'ongoing', 'pending'])
    .withMessage('Invalid \'status\'. Acceptable types: [\'finished\', \'canceled\', \'postponed\', \'ongoing\', \'pending\'] ')
];
export const validateMatchStatus = (key:string)=>(
  [
  check(key)
    .notEmpty()
    .isString()
    .withMessage('invalid format for status')
    .notEmpty()
    .withMessage(' match status cannot be empty')
    .toLowerCase()
    .trim()
    .isIn(['win', 'lose', 'draw'])
    .withMessage('Invalid \'result\'. Acceptable types: [\'win\', \'lose\', \'draw\'] ')
  
]);
 
export const validateMatchResult = (key:string)=>(
  [
  check(key)
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
  
]);
 
 