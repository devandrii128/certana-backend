import { Request, Response } from 'express';
import asyncHandler from '../utils/asyncHandler';
import { inMemoryData } from '../config/database';
import { ApiError } from '../middleware/errorHandler';
import { Job, JobResponse } from '../types/job.types';
import { UserRole } from '../types/auth.types';

/**
 * @desc    Get all jobs
 * @route   GET /api/jobs
 * @access  Private
 */
export const getJobs = asyncHandler(async (req: Request, res: Response) => {
  // Format jobs for response
  const jobsResponse: JobResponse[] = inMemoryData.jobs.map((job) => ({
    ...job,
    preferredInstallDate: job.preferredInstallDate.toISOString().split('T')[0],
  }));

  res.json(jobsResponse);
});

/**
 * @desc    Create a new job
 * @route   POST /api/jobs
 * @access  Private (Company only)
 */
export const createJob = asyncHandler(async (req: Request, res: Response) => {
  if (!req.user) {
    throw new ApiError(401, 'Not authenticated');
  }

  if (req.user.role !== UserRole.COMPANY) {
    throw new ApiError(403, 'Only companies can create jobs');
  }
  
  const { clientName, address, systemSize, preferredInstallDate } = req.body;
  
  // Create new job
  const newJob: Job = {
    id: inMemoryData.jobs.length + 1,
    clientName,
    address,
    systemSize,
    preferredInstallDate: new Date(preferredInstallDate),
    createdAt: new Date(),
    updatedAt: new Date(),
    companyId: req.user.id,
  };
  
  // Save job to in-memory database
  inMemoryData.jobs.push(newJob);
  
  // Format response
  const jobResponse: JobResponse = {
    ...newJob,
    preferredInstallDate: newJob.preferredInstallDate.toISOString().split('T')[0],
  };
  
  res.status(201).json(jobResponse);
});

/**
 * @desc    Get job by ID
 * @route   GET /api/jobs/:id
 * @access  Private
 */
export const getJobById = asyncHandler(async (req: Request, res: Response) => {
  const jobId = parseInt(req.params.id, 10);
  
  // Find job in database
  const job = inMemoryData.jobs.find((j) => j.id === jobId);
  
  if (!job) {
    throw new ApiError(404, 'Job not found');
  }
  
  // Format response
  const jobResponse: JobResponse = {
    ...job,
    preferredInstallDate: job.preferredInstallDate.toISOString().split('T')[0],
  };
  
  res.json(jobResponse);
});