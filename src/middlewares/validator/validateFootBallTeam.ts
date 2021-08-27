import { check } from 'express-validator';

// eslint-disable-next-line import/prefer-default-export
export const validateFootBallTeam = [
  check('name')
    .notEmpty()
    .isString()
    .withMessage('invalid format for name'),
  check('alias')
    .notEmpty()
    .isString()
    .withMessage('invalid format for alias')
    .trim(),
  check('number_of_players')
    .notEmpty()
    .isNumeric()
    .withMessage('invalid format for number of players')
    .toUpperCase()
    .trim(),
  check('captain')
    .optional()
    .isMongoId()
    .withMessage('invalid format for captain')
    .trim(),
  check('vice_captain')
    .optional()
    .isMongoId()
    .withMessage('invalid format for vice_captain'),
  check('manager.name')
    .notEmpty()
    .isString()
    .withMessage('invalid format for manager name')
    .trim(),
  check('manager.age')
    .notEmpty()
    .isNumeric()
    .withMessage('invalid format for manager age')
    .trim(),
  check('manager.nationality')
    .notEmpty()
    .isString()
    .withMessage('invalid format for manager nationality')
    .trim(),
  check('stadium.name')
    .notEmpty()
    .isString()
    .withMessage('invalid format for stadium name')
    .trim(),
  check('stadium.address')
    .notEmpty()
    .isString()
    .withMessage('invalid format for stadium address')
    .trim(),
  check('stadium.capacity')
    .notEmpty()
    .isNumeric()
    .withMessage('invalid format for stadium capacity')
    .trim(),
];

  