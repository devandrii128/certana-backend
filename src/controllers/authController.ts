import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import asyncHandler from '../utils/asyncHandler';
import { generateToken } from '../utils/jwt';
import { inMemoryData } from '../config/database';
import { ApiError } from '../middleware/errorHandler';
import { UserDTO, UserRole } from '../types/auth.types';

/**
 * @desc    Authenticate user & get token
 * @route   POST /api/auth/login
 * @access  Public
 */
export const login = asyncHandler(async (req: Request, res: Response) => {
  const { username, password } = req.body;

  // Find user by username
  const user = inMemoryData.users.find((u) => u.username === username);
  
  // Check if user exists and password is correct
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new ApiError(401, 'Invalid credentials');
  }
  
  // Create user DTO without password
  const userDTO: UserDTO = {
    id: user.id,
    username: user.username,
    role: user.role as UserRole,
  };

  // Generate JWT token
  const token = generateToken(userDTO);

  res.json({
    user: userDTO,
    token,
  });
});

/**
 * @desc    Get current user profile
 * @route   GET /api/auth/me
 * @access  Private
 */
export const getCurrentUser = asyncHandler(async (req: Request, res: Response) => {
  // User is already attached to req by auth middleware
  if (!req.user) {
    throw new ApiError(401, 'Not authenticated');
  }

  res.json({
    user: {
      id: req.user.id,
      username: req.user.username,
      role: req.user.role,
    },
  });
});