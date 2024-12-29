import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { ensureTodosTableExists } from "./db/db";
import todoRoutes from "./routes/todoRoutes";

dotenv.config();

// Initialize Express app
const app = express();
const port = process.env.PORT || "3001";

// Middleware to parse JSON
app.use(express.json());

// Enable CORS for your frontend domain (localhost:3000)
app.use(
  cors({
    origin: 'http://localhost:3000', // Ensure this matches your frontend URL
  })
);

// Use routes
app.use('/todos', todoRoutes);

// Ensure the todos table exists and start the server
async function initializeApp() {
  try {
    await ensureTodosTableExists();
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Error during app initialization:', error);
  }
}

initializeApp();