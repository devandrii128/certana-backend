import express from 'express';
import authRoutes from './authRoutes';
import jobRoutes from './jobRoutes';

const router = express.Router();

// Mount routes
router.use('/auth', authRoutes);
router.use('/jobs', jobRoutes);

export default router;