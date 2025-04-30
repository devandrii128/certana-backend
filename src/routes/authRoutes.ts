import express from 'express';
import { login, getCurrentUser } from '../controllers/authController';
import { authenticate } from '../middleware/auth';
import { loginValidators, validate } from '../middleware/validators';

const router = express.Router();

// POST /api/auth/login
router.post('/login', loginValidators, validate, login);

// GET /api/auth/me
router.get('/me', authenticate, getCurrentUser);

export default router;