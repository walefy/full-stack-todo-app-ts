import * as yup from 'yup';

export const createTaskSchemaBody = yup.object({
  taskName: yup.string().min(3).required(),
});

export const updateTaskSchemaBody = yup.object({
  taskName: yup.string().min(3),
  completed: yup.boolean(),
});

export const taskParamsId = yup.object({
  id: yup.number().required(),
});
