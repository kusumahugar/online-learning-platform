# Online Learning Platform

A complete production-ready full stack platform with React/Vite frontend, Node.js/Express backend, MongoDB, JWT auth, and Docker deployment.

## Contents

- `frontend/` — React application with login, registration, and dashboard pages
- `backend/` — Express API with JWT authentication and course CRUD endpoints
- `docker-compose.yml` — orchestrates frontend, backend, and MongoDB
- `Jenkinsfile` — CI pipeline scaffold for Docker build and deployment

## Getting Started

1. Build and start all services:
   ```bash
   docker compose up --build
   ```

2. Backend API:
   - `http://localhost:5000/api/auth/register`
   - `http://localhost:5000/api/auth/login`
   - `http://localhost:5000/api/courses`

3. Frontend app:
   - `http://localhost:3000`

## Docker Services

- `frontend` — React app served with `serve` on port `3000`
- `backend` — Node.js API on port `5000`
- `mongo` — MongoDB database on port `27017`

## Notes

- The frontend is configured to connect to the backend inside Docker using `http://backend:5000/api`.
- MongoDB uses the Docker service name `mongo` for container networking.
- Environment variables are loaded from `backend/.env` or `backend/.env.example`.
