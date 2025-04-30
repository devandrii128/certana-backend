import express from 'express';
import { getJobs, createJob, getJobById } from '../controllers/jobController';
import { authenticate, authorize } from '../middleware/auth';
import { jobValidators, validate } from '../middleware/validators';
import { UserRole } from '../types/auth.types';

const router = express.Router();

// All job routes require authentication
router.use(authenticate);

// GET /api/jobs
router.get('/', getJobs);

// POST /api/jobs
router.post(
  '/',
  authorize([UserRole.COMPANY]),
  jobValidators,
  validate,
  createJob
);

// GET /api/jobs/:id
router.get('/:id', getJobById);

export default router;