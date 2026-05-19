<<<<<<< HEAD
# Online Learning Platform

This repository contains a backend and frontend for an online learning platform.

- `backend/` contains the Node.js API server
- `frontend/` contains the client app
- `docker-compose.yml` orchestrates both services
- `Jenkinsfile` defines a simple CI pipeline
=======
# Online Learning Platform Backend

A production-ready Node.js Express backend for an online learning platform with MongoDB, JWT authentication, and role-based access control.

## Features

- User authentication with JWT
- Role-based access control (student/admin)
- Course CRUD operations
- MongoDB integration with Mongoose
- MVC structure
- Centralized error handling
- Environment variable configuration
- Sample course seeding script

## Setup

1. Copy `.env.example` to `.env`.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the app:
   ```bash
   npm run dev
   ```
4. Seed sample data:
   ```bash
   npm run seed
   ```

## API Endpoints

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/courses`
- `GET /api/courses/:id`
- `POST /api/courses` (admin only)
- `PUT /api/courses/:id` (admin only)
- `DELETE /api/courses/:id` (admin only)

## Environment Variables

- `PORT`
- `MONGO_URI`
- `JWT_SECRET`
- `JWT_EXPIRES_IN`
- `NODE_ENV`
>>>>>>> 09a2b2447600b9584ca63bbdd32f8434a290c22b
