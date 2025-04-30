import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';

/**
 * Validate request using express-validator
 */
export const validate = (req: Request, res: Response, next: NextFunction): void => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }
  next();
};

/**
 * Validators for login request
 */
export const loginValidators = [
  body('username').notEmpty().withMessage('Username is required'),
  body('password').notEmpty().withMessage('Password is required'),
];

/**
 * Validators for job creation
 */
export const jobValidators = [
  body('clientName').notEmpty().withMessage('Client name is required'),
  body('address').notEmpty().withMessage('Address is required'),
  body('systemSize')
    .notEmpty().withMessage('System size is required')
    .isNumeric().withMessage('System size must be a number')
    .custom((value) => value > 0).withMessage('System size must be greater than 0'),
  body('preferredInstallDate')
    .notEmpty().withMessage('Preferred installation date is required')
    .isISO8601().toDate().withMessage('Invalid date format'),
];