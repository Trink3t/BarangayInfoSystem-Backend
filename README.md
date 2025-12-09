# Barangay Information System - Backend API Documentation

## Table of Contents
- [Overview](#overview)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
- [Database Setup](#database-setup)
- [Environment Configuration](#environment-configuration)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)
- [Data Models](#data-models)
- [Error Handling](#error-handling)
- [Development Guide](#development-guide)

---

## Overview

The Barangay Information System Backend is a RESTful API built to manage barangay operations including resident records, appointments, services, and administrative tasks. The system provides secure authentication, activity logging, and comprehensive CRUD operations for all entities.

### Key Features
- 🔐 JWT-based authentication with HTTP-only cookies
- 👥 Resident management
- 📅 Appointment scheduling and tracking
- 🏢 Service catalog management
- 👔 Barangay secretary administration
- 📝 Activity logging for audit trails
- ✅ Request validation with Yup
- 🗄️ MySQL/MariaDB database with Prisma ORM

---

## Technology Stack

- **Runtime**: Node.js (Bun or npm compatible)
- **Framework**: Express.js 5.x
- **Database**: MySQL/MariaDB
- **ORM**: Prisma 7.x
- **Authentication**: JWT (jsonwebtoken)
- **Password Hashing**: bcryptjs
- **Validation**: Yup
- **Language**: TypeScript

---

## Getting Started

### Prerequisites

- Node.js 18+ or Bun 1.3+
- MySQL 8.0+ or MariaDB 10.5+
- npm, yarn, pnpm, or bun package manager

### Installation

#### Using npm:
```bash
# Clone the repository
git clone <repository-url>
cd barangayinfosystem-backend

# Install dependencies
npm install

# Install Prisma CLI globally (optional)
npm install -g prisma
```

#### Using Bun:
```bash
# Clone the repository
git clone <repository-url>
cd barangayinfosystem-backend

# Install dependencies
bun install
```

---

## Database Setup

### 1. Create MySQL Database

```sql
CREATE DATABASE barangay_system;
```

### 2. Configure Database Connection

Create a `.env` file in the project root (see [Environment Configuration](#environment-configuration))

### 3. Run Migrations

```bash
# Using npm
npx prisma migrate dev

# Using Bun
bunx prisma migrate dev
```

### 4. Generate Prisma Client

```bash
# Using npm
npx prisma generate

# Using Bun
bunx prisma generate
```

---

## Environment Configuration

Create a `.env` file in the project root with the following variables:

```env
# Database Configuration
DATABASE_URL="mysql://username:password@localhost:3306/barangay_system"
DB_HOST="localhost"
DB_PORT=3306
DB_USER="your_mysql_username"
DB_PASSWORD="your_mysql_password"
DB_NAME="barangay_system"

# Server Configuration
PORT=8000

# JWT Configuration
# Generate a secure secret: openssl rand -hex 64
JWT_SECRET="your_generated_jwt_secret_here"

# Environment
NODE_ENV="development"
```

### Generating JWT Secret

Run this command to generate a secure JWT secret:

```bash
openssl rand -hex 64
```

Copy the output and paste it as your `JWT_SECRET` in the `.env` file.

---

## Running the Application

### Development Mode

#### Using npm:
```bash
# Build TypeScript files
npm run build

# Run the application
npm start

# Or watch mode (if configured)
npm run dev
```

#### Using Bun:
```bash
bun run dev
```

The server will start on `http://localhost:8000` (or the PORT specified in `.env`)

### Production Mode

```bash
# Build the application
npm run build

# Set environment
export NODE_ENV=production

# Start the server
npm start
```

---

## API Endpoints

Base URL: `http://localhost:8000/api`

### Authentication Endpoints

#### POST `/api/auth/register`
Register a new barangay secretary.

**Request Body:**
```json
{
  "first_name": "Juan",
  "last_name": "Dela Cruz",
  "middle_name": "Santos",
  "username": "juandelacruz",
  "email": "juan@example.com",
  "password": "securepassword123"
}
```

**Response (201):**
```json
{
  "message": "Successfully registered barangay secretary",
  "data": {
    "id": "uuid-here",
    "first_name": "Juan",
    "last_name": "Dela Cruz",
    "username": "juandelacruz",
    "email": "juan@example.com"
  }
}
```

#### POST `/api/auth/login`
Login to the system.

**Request Body:**
```json
{
  "username": "juandelacruz",
  "password": "securepassword123"
}
```

**Response (200):**
```json
{
  "message": "Successfully logged in",
  "data": {
    "id": "uuid-here"
  }
}
```

**Note:** Returns an HTTP-only cookie named `token` containing the JWT.

#### POST `/api/auth/logout`
Logout from the system (requires authentication).

**Response (200):**
```json
{
  "message": "Successfully logged out"
}
```

#### GET `/api/auth/user`
Get current authenticated user (requires authentication).

**Response (200):**
```json
{
  "message": "Successfully fetched user",
  "data": {
    "id": "uuid-here",
    "first_name": "Juan",
    "last_name": "Dela Cruz",
    "middle_name": "Santos",
    "username": "juandelacruz",
    "email": "juan@example.com"
  }
}
```

---

### Barangay Secretary Endpoints

**All endpoints require authentication**

#### GET `/api/barangay_secretaries`
Get all barangay secretaries.

**Response (200):**
```json
{
  "message": "Successfully retrieved barangay secretaries",
  "data": [
    {
      "id": "uuid-here",
      "first_name": "Juan",
      "last_name": "Dela Cruz",
      "middle_name": "Santos",
      "username": "juandelacruz",
      "email": "juan@example.com"
    }
  ]
}
```

#### GET `/api/barangay_secretaries/:id`
Get a specific barangay secretary by ID.

#### POST `/api/barangay_secretaries`
Create a new barangay secretary (same request body as register).

#### PATCH/PUT `/api/barangay_secretaries/:id`
Update a barangay secretary.

**Request Body (all fields optional):**
```json
{
  "first_name": "Juan",
  "last_name": "Dela Cruz",
  "middle_name": "Santos",
  "username": "newusername",
  "email": "newemail@example.com",
  "password": "newpassword"
}
```

#### DELETE `/api/barangay_secretaries/:id`
Delete a barangay secretary. **Note:** You cannot delete yourself.

---

### Resident Endpoints

**All endpoints require authentication**

#### GET `/api/residents`
Get all residents.

**Response (200):**
```json
{
  "message": "Successfully retrieved residents",
  "data": [
    {
      "id": "uuid-here",
      "first_name": "Maria",
      "last_name": "Santos",
      "middle_name": "Garcia",
      "address": "123 Main St, Barangay Centro",
      "birth_date": "1990-05-15T00:00:00.000Z",
      "contact_number": "+639171234567",
      "sex": "FEMALE"
    }
  ]
}
```

#### GET `/api/residents/:id`
Get a specific resident by ID.

#### POST `/api/residents`
Create a new resident.

**Request Body:**
```json
{
  "first_name": "Maria",
  "last_name": "Santos",
  "middle_name": "Garcia",
  "address": "123 Main St, Barangay Centro",
  "birth_date": "1990-05-15",
  "contact_number": "+639171234567",
  "sex": "FEMALE"
}
```

**Validation Rules:**
- `first_name`: Required
- `last_name`: Required
- `middle_name`: Optional
- `address`: Required
- `birth_date`: Required, format: YYYY-MM-DD
- `contact_number`: Required, must start with +63, exactly 13 characters
- `sex`: Required, must be "MALE" or "FEMALE"

#### PATCH/PUT `/api/residents/:id`
Update a resident (all fields optional).

#### DELETE `/api/residents/:id`
Delete a resident.

---

### Service Endpoints

**All endpoints require authentication**

#### GET `/api/services`
Get all services.

**Response (200):**
```json
{
  "message": "Successfully retrieved services",
  "data": [
    {
      "id": "uuid-here",
      "name": "Barangay Clearance",
      "description": "Certificate of residency and good moral character"
    }
  ]
}
```

#### GET `/api/services/:id`
Get a specific service by ID.

#### POST `/api/services`
Create a new service.

**Request Body:**
```json
{
  "name": "Barangay Clearance",
  "description": "Certificate of residency and good moral character"
}
```

#### PATCH/PUT `/api/services/:id`
Update a service (all fields optional).

#### DELETE `/api/services/:id`
Delete a service.

---

### Appointment Endpoints

**All endpoints require authentication**

#### GET `/api/appointments`
Get all appointments (ordered by appointment_datetime ascending).

**Response (200):**
```json
{
  "message": "Successfully retrieved appointments",
  "data": [
    {
      "id": "uuid-here",
      "resident_id": "resident-uuid",
      "service_id": "service-uuid",
      "appointment_datetime": "2024-12-15T10:00:00.000Z",
      "created_at": "2024-12-09T08:00:00.000Z",
      "processed_by": "secretary-uuid",
      "status": "PROCESSING",
      "remarks": "Pending document submission"
    }
  ]
}
```

#### GET `/api/appointments/:id`
Get a specific appointment by ID.

#### POST `/api/appointments`
Create a new appointment.

**Request Body:**
```json
{
  "resident_id": "resident-uuid",
  "service_id": "service-uuid",
  "appointment_datetime": "2024-12-15T10:00",
  "status": "PROCESSING",
  "remarks": "Pending document submission"
}
```

**Validation Rules:**
- `resident_id`: Required, must exist in database
- `service_id`: Required, must exist in database
- `appointment_datetime`: Required, format: YYYY-MM-DDTHH:mm
- `status`: Required, must be one of: "PROCESSING", "FAILED", "DONE"
- `remarks`: Optional

#### PATCH/PUT `/api/appointments/:id`
Update an appointment (all fields optional).

**Request Body (all fields optional):**
```json
{
  "resident_id": "resident-uuid",
  "service_id": "service-uuid",
  "appointment_datetime": "2024-12-15T14:00",
  "status": "DONE",
  "remarks": "Completed"
}
```

#### DELETE `/api/appointments/:id`
Delete an appointment.

---

## Authentication

The API uses JWT (JSON Web Tokens) for authentication with HTTP-only cookies.

### How It Works

1. **Login**: User sends credentials to `/api/auth/login`
2. **Token Generation**: Server validates credentials and generates a JWT
3. **Cookie Storage**: JWT is stored in an HTTP-only cookie named `token`
4. **Subsequent Requests**: Cookie is automatically sent with each request
5. **Verification**: Middleware verifies the token for protected routes
6. **Logout**: `/api/auth/logout` clears the cookie

### Protected Routes

All routes except `/api/auth/login` and `/api/auth/register` require authentication.

### Cookie Configuration

- **Name**: `token`
- **HttpOnly**: `true` (prevents JavaScript access)
- **Secure**: `true` in production (HTTPS only)
- **SameSite**: `lax`
- **Expiration**: 1 day

### Making Authenticated Requests

#### Using fetch (Browser):
```javascript
fetch('http://localhost:8000/api/residents', {
  method: 'GET',
  credentials: 'include', // Important: includes cookies
  headers: {
    'Content-Type': 'application/json'
  }
})
```

#### Using Postman:
1. Send login request to `/api/auth/login`
2. Cookie will be automatically stored
3. Enable "Cookies" in Postman
4. Subsequent requests will include the cookie automatically

#### Using cURL:
```bash
# Login and save cookie
curl -c cookies.txt -X POST http://localhost:8000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"user","password":"pass"}'

# Use cookie in subsequent requests
curl -b cookies.txt http://localhost:8000/api/residents
```

---

## Data Models

### Enums

#### Sex
- `MALE`
- `FEMALE`
- `OTHER`

#### Status (Appointment)
- `PROCESSING` - Appointment is being processed
- `FAILED` - Appointment failed or was cancelled
- `DONE` - Appointment completed successfully

### Database Schema

#### BarangaySecretary
```typescript
{
  id: string (UUID)
  first_name: string
  middle_name?: string | null
  last_name: string
  username: string (unique)
  password: string (hashed)
  email: string (unique)
}
```

#### Resident
```typescript
{
  id: string (UUID)
  first_name: string
  middle_name?: string | null
  last_name: string
  address: string
  birth_date: Date
  contact_number: string
  sex: Sex enum
}
```

#### Service
```typescript
{
  id: string (UUID)
  name: string
  description?: string | null
}
```

#### Appointment
```typescript
{
  id: string (UUID)
  resident_id?: string | null
  service_id?: string | null
  appointment_datetime: Date
  created_at: Date
  processed_by?: string | null
  status: Status enum
  remarks?: string | null
}
```

#### ActivityLog
```typescript
{
  id: string (UUID)
  title: string
  description?: string | null
  barangay_secretary_id?: string | null
  created_at: Date
}
```

---

## Error Handling

### HTTP Status Codes

- `200 OK` - Successful GET, PATCH, PUT, DELETE
- `201 Created` - Successful POST (resource created)
- `400 Bad Request` - Validation errors or invalid data
- `401 Unauthorized` - Missing or invalid authentication
- `404 Not Found` - Resource not found
- `500 Internal Server Error` - Server-side error

### Error Response Format

#### Validation Errors (400):
```json
{
  "errors": {
    "field_name": "Error message",
    "another_field": "Another error message"
  }
}
```

Example:
```json
{
  "errors": {
    "username": "Username already exists",
    "email": "Must be a valid email"
  }
}
```

#### Authentication Errors (401):
```json
{
  "message": "Unauthenticated"
}
```

or

```json
{
  "message": "Invalid credentials"
}
```

#### Not Found Errors (404):
```json
{
  "message": "Not found"
}
```

#### General Errors (500):
```json
{
  "error": "Error details"
}
```

---

## Development Guide

### Project Structure

```
barangayinfosystem-backend/
├── prisma/
│   ├── schema.prisma          # Database schema
│   └── migrations/            # Database migrations
├── src/
│   ├── controllers/           # Request handlers
│   │   ├── activity-log.controller.ts
│   │   ├── appointment.controller.ts
│   │   ├── auth.controller.ts
│   │   ├── barangay-secretary.controller.ts
│   │   ├── resident.controller.ts
│   │   └── service.controller.ts
│   ├── middlewares/
│   │   ├── auth/             # Authentication middleware
│   │   │   ├── authenticateJWT.ts
│   │   │   └── index.ts
│   │   └── validators/       # Request validators
│   │       ├── validateLogin.ts
│   │       ├── validateRegistration.ts
│   │       ├── validateCreate*.ts
│   │       ├── validateUpdate*.ts
│   │       └── index.ts
│   ├── prisma/
│   │   └── client.ts         # Prisma client setup
│   ├── routes/               # Route definitions
│   │   ├── appointments.routes.ts
│   │   ├── auth.routes.ts
│   │   ├── barangay-secretaries.routes.ts
│   │   ├── residents.routes.ts
│   │   ├── services.routes.ts
│   │   └── index.ts
│   ├── services/             # Business logic
│   │   ├── activity-log.service.ts
│   │   ├── appointment.service.ts
│   │   ├── auth.service.ts
│   │   ├── barangay-secretary.service.ts
│   │   ├── resident.service.ts
│   │   └── service.service.ts
│   ├── types/                # TypeScript types
│   │   ├── express.d.ts
│   │   └── requests/
│   ├── utils/                # Utility functions
│   │   ├── hash.ts          # Password hashing
│   │   ├── jwt.ts           # JWT utilities
│   │   ├── logger.ts        # Activity logging
│   │   └── yup-validation.ts
│   ├── app.ts               # Express app setup
│   └── index.ts             # Entry point
├── .env                      # Environment variables
├── .env.example             # Environment template
├── package.json
├── tsconfig.json
└── README.md
```

### Adding a New Endpoint

1. **Define the route** in `src/routes/`
2. **Create controller** in `src/controllers/`
3. **Create service** in `src/services/` (if needed)
4. **Add validation** in `src/middlewares/validators/` (if needed)
5. **Update types** in `src/types/requests/` (if needed)

Example:
```typescript
// 1. Route (src/routes/example.routes.ts)
import { Router } from "express";
import { ExampleController } from "../controllers/example.controller";
import { authenticateJWT } from "../middlewares/auth";

const router = Router();
const controller = new ExampleController();

router.use(authenticateJWT);
router.get("/", controller.getAll);
router.post("/", controller.create);

export default router;

// 2. Controller (src/controllers/example.controller.ts)
import { Request, Response } from "express";
import { ExampleService } from "../services/example.service";

const service = new ExampleService();

export class ExampleController {
  async getAll(req: Request, res: Response) {
    try {
      const data = await service.getAll();
      return res.status(200).json({
        message: "Success",
        data
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

// 3. Service (src/services/example.service.ts)
import { prisma } from "../prisma/client";

export class ExampleService {
  async getAll() {
    return await prisma.example.findMany();
  }
}
```

### Activity Logging

The system automatically logs all authenticated actions:

```typescript
import { logActivity } from "../utils/logger";

// In your controller
await logActivity("Action description", req.user.id);
```

Logs are stored in the `activity_logs` table with:
- Title
- Description (optional)
- User ID (barangay_secretary_id)
- Timestamp

### Database Migrations

#### Create a new migration:
```bash
# Using npm
npx prisma migrate dev --name migration_name

# Using Bun
bunx prisma migrate dev --name migration_name
```

#### Apply migrations in production:
```bash
# Using npm
npx prisma migrate deploy

# Using Bun
bunx prisma migrate deploy
```

#### Reset database (development only):
```bash
# Using npm
npx prisma migrate reset

# Using Bun
bunx prisma migrate reset
```

### Prisma Studio (Database GUI)

View and edit data in the browser:

```bash
# Using npm
npx prisma studio

# Using Bun
bunx prisma studio
```

Opens at: `http://localhost:5555`

---

## CORS Configuration

The API is configured to accept requests from `http://localhost:*` in development.

To modify CORS settings, edit `src/index.ts`:

```typescript
app.use(cors({
    origin: "http://localhost:*", // Change this
    methods: ["GET", "POST", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization", "Accept"]
}))
```

For production, specify exact origins:

```typescript
app.use(cors({
    origin: ["https://yourdomain.com", "https://www.yourdomain.com"],
    methods: ["GET", "POST", "DELETE", "PATCH", "PUT"],
    allowedHeaders: ["Content-Type", "Authorization", "Accept"],
    credentials: true // Important for cookies
}))
```

---

## Testing the API

### Using Postman

1. Import the API endpoints
2. Create an environment with `baseUrl = http://localhost:8000`
3. Login via `/api/auth/login` to get the cookie
4. Test other endpoints (cookie will be automatically included)

### Using cURL Examples

#### Register:
```bash
curl -X POST http://localhost:8000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "first_name": "Juan",
    "last_name": "Dela Cruz",
    "username": "juandc",
    "email": "juan@example.com",
    "password": "password123"
  }'
```

#### Login:
```bash
curl -c cookies.txt -X POST http://localhost:8000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "username": "juandc",
    "password": "password123"
  }'
```

#### Get Residents:
```bash
curl -b cookies.txt http://localhost:8000/api/residents
```

#### Create Resident:
```bash
curl -b cookies.txt -X POST http://localhost:8000/api/residents \
  -H "Content-Type: application/json" \
  -d '{
    "first_name": "Maria",
    "last_name": "Santos",
    "address": "123 Main St",
    "birth_date": "1990-05-15",
    "contact_number": "+639171234567",
    "sex": "FEMALE"
  }'
```

---

## Troubleshooting

### Common Issues

#### 1. Database Connection Error
```
Error: Can't reach database server
```

**Solutions:**
- Verify MySQL/MariaDB is running
- Check `.env` database credentials
- Ensure database exists: `CREATE DATABASE barangay_system;`
- Check database port (default: 3306)

#### 2. Prisma Client Not Generated
```
Error: Cannot find module '@prisma/client'
```

**Solution:**
```bash
npx prisma generate
# or
bunx prisma generate
```

#### 3. JWT Secret Missing
```
Error: JWT secret not configured
```

**Solution:**
Generate and add JWT_SECRET to `.env`:
```bash
openssl rand -hex 64
```

#### 4. Port Already in Use
```
Error: Port 8000 is already in use
```

**Solutions:**
- Change PORT in `.env`
- Kill process using the port:
  ```bash
  # Find process
  lsof -i :8000
  # Kill it
  kill -9 <PID>
  ```

#### 5. Validation Errors
```json
{
  "errors": {
    "field": "Error message"
  }
}
```

**Solution:**
Check the validation rules in the endpoint documentation and ensure your request matches the required format.

#### 6. CORS Errors
```
Access to fetch has been blocked by CORS policy
```

**Solution:**
- Ensure `credentials: 'include'` in fetch requests
- Verify CORS configuration in `src/index.ts`
- Check origin matches allowed origins

---

## Production Deployment

### Checklist

- [ ] Set `NODE_ENV=production` in environment
- [ ] Use strong JWT_SECRET (64+ characters)
- [ ] Configure production database
- [ ] Update CORS origins to production domains
- [ ] Enable HTTPS
- [ ] Set secure cookie flags
- [ ] Run database migrations: `npx prisma migrate deploy`
- [ ] Build application: `npm run build`
- [ ] Use process manager (PM2, systemd)
- [ ] Set up monitoring and logging
- [ ] Configure firewall rules
- [ ] Regular database backups

### Example PM2 Setup

```bash
# Install PM2
npm install -g pm2

# Start application
pm2 start npm --name "barangay-api" -- start

# Setup auto-restart on reboot
pm2 startup
pm2 save

# Monitor
pm2 monit
```

---

## License

[Add your license information here]

## Support

For issues and questions:
- Open an issue on GitHub
- Contact: [your-email@example.com]

---

## Changelog

### Version 1.0.0 (Initial Release)
- Authentication system with JWT
- CRUD operations for all entities
- Activity logging
- Request validation
- MySQL/MariaDB support with Prisma ORM