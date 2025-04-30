import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import routes from './routes';
import { notFound, errorHandler } from './middleware/errorHandler';

// Create Express app
const app = express();

// Middleware
app.use(helmet()); // Security headers
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request body

// API routes
app.use('/api', routes);

// Base route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Certana API',
    version: '1.0.0',
  });
});

// Error handling
app.use(notFound);
app.use(errorHandler);

export default app;
