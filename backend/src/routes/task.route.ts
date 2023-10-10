import { Router } from 'express';
import { getAllTasks, createTask } from '../model/tasks.model'

export const taskRouter = Router();

taskRouter.get('/', async (_req, res) => {
  const tasks = await getAllTasks();
  res.status(200).send(tasks);
});

taskRouter.post('/', async (req, res) => {
  const { taskName } = req.body;

  if (!taskName) {
    return res.status(400).send({ message: 'Task name is required' });
  }

  const result = await createTask(taskName);
  return res.status(201).send(result);
});

taskRouter.get('/:id', (_req, res) => {
  // TODO: GET A TASK BY ID
  res.status(200).send({ message: 'Hello World Task' });
});
