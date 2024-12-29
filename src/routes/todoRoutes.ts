import { Router } from 'express';
import { getTodos, getTodoById, createTodo, updateTodo, deleteTodo, toggleTodo } from '../controllers/todoController';

const router = Router();

router.get('/', getTodos);
router.get('/:id', getTodoById);
router.post('/', createTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);
router.patch('/:id', toggleTodo); // Add this line

export default router;