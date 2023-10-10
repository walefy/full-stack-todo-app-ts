import { taskRouter } from './task.route';
import { Router } from 'express';

export const routes = Router();

routes.use('/tasks', taskRouter);
