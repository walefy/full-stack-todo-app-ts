import { AnySchema } from 'yup';
import { Request, Response, NextFunction } from 'express';

export const validateBody = (schema: AnySchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate(req.body);
      return next();
    } catch (error) {
      let message = 'Unknown error';
      if (error instanceof Error) message = error.message;
      return res.status(400).json({ error: message });
    }
  };
};

export const validateParams = (schema: AnySchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate(req.params);
      return next();
    } catch (error) {
      let message = 'Unknown error';
      if (error instanceof Error) message = error.message;
      return res.status(400).json({ error: message });
    }
  };
};
