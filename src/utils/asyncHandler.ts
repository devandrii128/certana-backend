import { Request, Response, NextFunction } from 'express';

/**
 * Wrapper for async controller functions to eliminate try-catch blocks
 */
const asyncHandler =
  (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) =>
  (req: Request, res: Response, next: NextFunction): Promise<any> => {
    return Promise.resolve(fn(req, res, next)).catch(next);
  };

export default asyncHandler;