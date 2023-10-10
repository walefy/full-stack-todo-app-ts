import { Router } from 'express';
import { validateBody, validateParams } from '../middlewares/validateBody';
import * as taskModel from '../models/tasks.model';
import * as taskSchema from '../schemas/task.schema';

export const taskRouter = Router();

taskRouter.get('/', async (_req, res) => {
  const tasks = await taskModel.getAllTasks();
  res.status(200).send(tasks);
});

taskRouter.post('/', validateBody(taskSchema.createTaskSchemaBody), async (req, res) => {
  const { taskName } = req.body;

  if (!taskName) {
    return res.status(400).send({ message: 'Task name is required' });
  }

  const result = await taskModel.createTask(taskName);
  return res.status(201).send(result);
});

taskRouter.get('/:id', validateParams(taskSchema.taskParamsId), async (req, res) => {
  const { id } = req.params;
  const task = await taskModel.getTaskById(id);
  res.status(200).send(task);
});

taskRouter.put(
  '/:id',
  validateBody(taskSchema.updateTaskSchemaBody),
  validateParams(taskSchema.taskParamsId),
  async (req, res) => {
    const { id } = req.params;

    const task = { ...req.body };
    const isUpdated = await taskModel.updateTaskById(id, task);

    if (!isUpdated) {
      return res.status(400).send({ message: 'failed update' });
    }

    return res.status(200).send({ message: 'success update'});
});
