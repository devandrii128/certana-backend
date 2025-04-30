import jwt from 'jsonwebtoken';
import config from '../config/env';
import { JwtPayload, UserDTO } from '../types/auth.types';

/**
 * Generate a JWT token for a user
 */
export const generateToken = (user: UserDTO): string => {
  const payload: JwtPayload = {
    id: user.id,
    username: user.username,
    role: user.role,
  };

  return jwt.sign(payload, config.jwtSecret, {
    expiresIn: config.jwtExpiresIn,
  });
};

/**
 * Verify and decode a JWT token
 */
export const verifyToken = (token: string): JwtPayload => {
  return jwt.verify(token, config.jwtSecret) as JwtPayload;
};