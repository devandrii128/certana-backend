import { Pool } from 'pg';
import config from './env';

// Create a connection pool to the PostgreSQL database
const pool = new Pool({
  host: config.db.host,
  port: config.db.port,
  database: config.db.database,
  user: config.db.user,
  password: config.db.password,
  // Maximum number of clients in the pool
  max: 20,
  // Connection timeout
  connectionTimeoutMillis: 0,
  // Idle timeout for clients
  idleTimeoutMillis: 0,
});

// For simplicity, I'll use in-memory data as a fallback
// This is useful for development and testing without a database
// In a production environment, it should be removed and rely solely on the database
const inMemoryData = {
  users: [
    {
      id: 1,
      username: 'admin',
      password: '$2a$10$xVqYAhKj9BI.J5e9ShH1/.Ry.9nRlQFQ2gl.mK7vQAuNnPNpxY3uy', // admin123
      role: 'company',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      username: 'electrician',
      password: '$2a$10$bFB9Tz.mrJMRxIxbBHEC3e642nRCHEBzR.q.YT.JhErFLNGDwb1KC', // elect123
      role: 'electrician',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ],
  jobs: [] as any[],
};

export { pool, inMemoryData };