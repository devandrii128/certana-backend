export interface Job {
  id: number;
  clientName: string;
  address: string;
  systemSize: number;
  preferredInstallDate: Date;
  createdAt: Date;
  updatedAt: Date;
  companyId: number;
}

export interface CreateJobRequest {
  clientName: string;
  address: string;
  systemSize: number;
  preferredInstallDate: string;
}

export interface JobResponse extends Omit<Job, 'updatedAt' | 'preferredInstallDate'> {
  preferredInstallDate: string;
}
