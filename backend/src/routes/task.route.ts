import { Router } from 'express';
import * as taskModel from '../model/tasks.model'

export const taskRouter = Router();

taskRouter.get('/', async (_req, res) => {
  const tasks = await taskModel.getAllTasks();
  res.status(200).send(tasks);
});

taskRouter.post('/', async (req, res) => {
  const { taskName } = req.body;

  if (!taskName) {
    return res.status(400).send({ message: 'Task name is required' });
  }

  const result = await taskModel.createTask(taskName);
  return res.status(201).send(result);
});

taskRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const task = await taskModel.getTaskById(id);
  res.status(200).send(task);
});
