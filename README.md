# Nooro-Backend: Todo List App

This is the **backend API** for the **Full-Stack Todo List App**, built with **Express.js**, **Prisma**, and **MySQL**. It provides RESTful endpoints for managing tasks, enabling features like creating, editing, marking as completed, and deleting tasks.

---

## Features

- **Create a Task**: Add a new task with a title and color.
- **Retrieve Tasks**: Fetch a list of all tasks.
- **Update a Task**: Edit an existing task's details, including title, color, and completion status.
- **Delete a Task**: Remove a task permanently from the database.

---

## Prerequisites

1. **Node.js**: Ensure Node.js is installed on your machine.
2. **MySQL**: A MySQL server must be running locally or on the cloud.
3. **Environment Variables**: Create a `.env` file in the project root.

---

## Environment Variables

Ensure the following variables are set in the `.env` file:

```env
DATABASE_URL="mysql://<username>:<password>@localhost:3306/todo_db"
PORT=3001
```

Replace `<username>` and `<password>` with your MySQL credentials.

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <backend-repository-url>
cd <repository-folder>
```

### 2. Install Dependencies

Run the following command to install all required dependencies:

```bash
npm install
```

### 3. Create the Database

Make sure MySQL is running, then create the database using:

```sql
CREATE DATABASE todo_db;
```

### 4. Initialize Prisma

Generate the Prisma client and apply migrations:

```bash
npx prisma generate
npx prisma migrate dev --name init
```

This will set up the database schema and generate the Prisma client.

### 5. Start the Server

Run the development server:

```bash
npm run dev
```

The server will start on `http://localhost:3001`.

---

## API Endpoints

### Base URL: `http://localhost:3001`

| Method | Endpoint       | Description                     |
|--------|----------------|---------------------------------|
| GET    | `/tasks`       | Fetch all tasks.               |
| POST   | `/tasks`       | Create a new task.             |
| PUT    | `/tasks/:id`   | Update an existing task.       |
| DELETE | `/tasks/:id`   | Delete a task by ID.           |

### Example Task Object:

```json
{
  "id": "1",
  "title": "Brush your teeth",
  "color": "#FF0000",
  "completed": false,
  "createdAt": "2024-01-01T00:00:00Z",
  "updatedAt": "2024-01-01T00:00:00Z"
}
```

---

## Project Structure

```
backend/
├── prisma/
│   ├── migrations/        # Database migration files
│   └── schema.prisma      # Prisma schema
├── src/
│   ├── index.ts           # Entry point for the Express app
│   ├── routes/            # Route handlers for tasks
│   │   └── taskRoutes.ts  # Task-related API routes
├── .env                   # Environment variables
├── package.json           # Project dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── nodemon.json           # Configuration for hot reloading
└── README.md              # Documentation
```

---

## Key Scripts

| Script              | Description                                   |
|---------------------|-----------------------------------------------|
| `npm run dev`       | Starts the development server with hot reload.|
| `npm run build`     | Builds the application for production.        |
| `npm run start`     | Starts the production server.                 |
| `npm run prisma:generate` | Generates the Prisma client.            |
| `npm run prisma:migrate`  | Applies database migrations.            |

---

## Technologies Used

- **Express.js**: RESTful API framework.
- **Prisma**: ORM for database management.
- **MySQL**: Database for storing tasks.
- **TypeScript**: Type-safe JavaScript.

---

## Deployment

To deploy the backend application:

1. Ensure your database is accessible in the production environment.
2. Build the application:

   ```bash
   npm run build
   ```

3. Start the production server:

   ```bash
   npm run start
   ```

---

## Known Issues

- Ensure the MySQL database is running and the `DATABASE_URL` is correctly configured in `.env`.
- Prisma migrations may fail if the database schema is manually modified. Use `prisma migrate` to handle schema changes.

---

## Contributing

1. Fork this repository.
2. Create a new feature branch:

   ```bash
   git checkout -b feature-name
   ```

3. Commit your changes:

   ```bash
   git commit -m "Add feature"
   ```

4. Push the branch:

   ```bash
   git push origin feature-name
   ```

5. Open a pull request.

---

## License

This project is licensed under the MIT License. Feel free to use it as you see fit.

---

## Contact

If you encounter any issues or have questions, feel free to open an issue in the repository.

---
