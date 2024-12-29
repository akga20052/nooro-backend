import { Request, Response } from 'express';
import { pool } from '../db/db';
import { RowDataPacket } from 'mysql2';

interface Todo extends RowDataPacket {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export const getTodos = async (req: Request, res: Response) => {
  try {
    const [rows] = await pool.query<Todo[]>('SELECT * FROM todos');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching todos:', error);
    res.status(500).json({ error: (error as Error).message });
  }
};

export const getTodoById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query<Todo[]>('SELECT * FROM todos WHERE id = ?', [id]);
    res.json(rows[0]);
  } catch (error) {
    console.error('Error fetching todo:', error);
    res.status(500).json({ error: (error as Error).message });
  }
};

export const createTodo = async (req: Request, res: Response) => {
  const { title, description } = req.body;
  try {
    const [result] = await pool.query('INSERT INTO todos (title, description) VALUES (?, ?)', [title, description]);
    res.status(201).json({ id: (result as any).insertId, title, description });
  } catch (error) {
    console.error('Error creating todo:', error);
    res.status(500).json({ error: (error as Error).message });
  }
};

export const updateTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description } = req.body;
  try {
    await pool.query('UPDATE todos SET title = ?, description = ? WHERE id = ?', [title, description, id]);
    res.status(200).json({ id, title, description });
  } catch (error) {
    console.error('Error updating todo:', error);
    res.status(500).json({ error: (error as Error).message });
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM todos WHERE id = ?', [id]);
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting todo:', error);
    res.status(500).json({ error: (error as Error).message });
  }
};

export const toggleTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { completed } = req.body;
  try {
    await pool.query('UPDATE todos SET completed = ? WHERE id = ?', [completed, id]);
    const [rows] = await pool.query<Todo[]>('SELECT * FROM todos WHERE id = ?', [id]);
    res.json({ todo: rows[0] });
  } catch (error) {
    console.error('Error toggling todo:', error);
    res.status(500).json({ error: (error as Error).message });
  }
};