import { validationResult, check } from 'express-validator';
import { Request,Response, NextFunction } from 'express';

export function validate(req: Request, res:Response, next: NextFunction) {
  const errors = validationResult(req);
  // console.log('REQERR', errors);
  if (errors.isEmpty()) {
    return next();
  } 
  const extractedErrors: Record<string, any> = {};

  // console.log(JSON.stringify(errors.array()));
  errors.array().forEach(({ param, msg }) => { extractedErrors[param] = msg; });

  return res.status(400).json({
    status: 'Failed',
    message: 'Form has errors',
    errors: extractedErrors,
  });
}


export const validateId = (key:string)=>(
  [
  check(key)
    .notEmpty()
    .isMongoId()
    .withMessage('invalid format for id')
    .notEmpty()
    .withMessage('invalid player name cannot be empty')
    .trim(),
  
]);
 