import mysql from "mysql2/promise";
import dotenv from "dotenv";

// Load environment variables from the .env file
dotenv.config();

// Create a MySQL database connection pool
export const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Function to ensure the todos table exists
export async function ensureTodosTableExists() {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS todos (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description TEXT,
      completed BOOLEAN DEFAULT FALSE
    );
  `;
  try {
    const connection = await pool.getConnection();
    await connection.query(createTableQuery);
    connection.release();
    console.log('Todos table ensured.');
  } catch (error) {
    console.error('Error ensuring todos table:', error);
  }
}

// Ensure the todos table exists
ensureTodosTableExists();