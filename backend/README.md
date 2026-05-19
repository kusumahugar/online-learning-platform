# Online Learning Platform Backend

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create or update `.env` with your MongoDB URI and JWT secret.

3. Seed sample data:
   ```bash
   npm run seed
   ```

4. Start the backend:
   ```bash
   npm run dev
   ```

## API

- `POST /api/auth/register` - register a new student
- `POST /api/auth/login` - login and receive JWT
- `GET /api/auth/me` - current user profile
- `GET /api/courses` - list all courses (authenticated)
- `GET /api/courses/:id` - get a course by ID
- `POST /api/courses` - create a course (admin only)
- `PUT /api/courses/:id` - update a course (admin only)
- `DELETE /api/courses/:id` - delete a course (admin only)
