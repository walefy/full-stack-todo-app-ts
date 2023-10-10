import { connection } from './connection';
import { format } from 'date-fns';
import { taskWithoutId } from '../types';
import { toSnakeCase } from '../camelSnakeParser/toSnakeCase';

export const getAllTasks = async () => {
  const result = await connection.query('SELECT * FROM tasks');
  return result.rows;
};

export const createTask = async (taskName: string) => {
  const values = [
    taskName,
    false,
    format(Date.now(), 'yyyy-MM-dd HH:mm:ss'),
  ];
  
  const result = await connection.query(`
    INSERT INTO tasks
    (task_name, completed, created_on)
    VALUES ($1, $2, $3)
    RETURNING task_id`,
    values
  );

  return result.rows[0];
};

export const getTaskById = async (taskId: string) => {
  const result = await connection.query(`
    SELECT * FROM tasks WHERE task_id = $1
    `,
    [taskId]
  );

  if (result.rows.length === 0) return {};

  return result.rows[0];
};

export const updateTaskById = async (taskId: string, task: object) => {
  const params = Object.keys(task).map((key, index) => {
    return `${toSnakeCase(key)} = $${index + 1}`;
  });

  const values = Object.values(task);
  
  const result = await connection.query(`
    UPDATE tasks SET ${params} WHERE task_id = $${values.length + 1}
    `,
    [...values, taskId]
  );

  return result.rowCount === 1;
};
