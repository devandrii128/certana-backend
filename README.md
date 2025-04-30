# Certana Backend API

This is the backend API for the Certana platform, a solar job bidding marketplace where solar companies can post installation jobs and electricians can bid on them.

## Technologies

- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **TypeScript** - Type checking and improved developer experience
- **PostgreSQL** - Database (with in-memory fallback for development)
- **JWT** - Authentication

## Project Structure

```
src/
├── config/                 # Configuration files
├── controllers/            # Request handlers
├── middleware/             # Express middleware
├── models/                 # Data models
├── routes/                 # API route definitions
├── services/               # Business logic
├── types/                  # TypeScript type definitions
├── utils/                  # Utility functions
├── app.ts                  # Express app setup
└── server.ts               # Application entry point
```

## Getting Started

### Prerequisites

- Node.js v16 or higher
- npm or yarn
- PostgreSQL (optional)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/devandrii128/certana-backend.git
   cd certana-backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and configure environment variables:
   ```
   cp .env.example .env
   ```

4. Start the development server:
   ```
   npm run dev
   ```

The server will be running at http://localhost:5000.

## API Endpoints

### Authentication

- `POST /api/auth/login` - Login with username and password
- `GET /api/auth/me` - Get current user profile

### Jobs

- `GET /api/jobs` - Get all jobs
- `POST /api/jobs` - Create a new job (requires company role)
- `GET /api/jobs/:id` - Get job by ID

## Test Accounts

For testing purposes, the application includes two pre-configured users:

- **Solar Company**:
  - Username: `admin`
  - Password: `admin123`

- **Electrician**:
  - Username: `electrician`
  - Password: `elect123`

## Development

### Available Scripts

- `npm run dev` - Start development server with hot-reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Lint code
- `npm run typecheck` - Check TypeScript types
- `npm test` - Run tests

## License

MIT