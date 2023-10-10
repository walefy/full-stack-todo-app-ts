import { connection } from './connection';
import { format } from 'date-fns';

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