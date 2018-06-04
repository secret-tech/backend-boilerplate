import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../exceptions/exceptions';

export default function handle(err: Error, req: Request, res: Response, next: NextFunction): void {
  let status;

  switch (err.constructor) {
    case CustomError:
    default: {
      status = 500;
      console.error(err.message);
      console.error(err.stack);
    }
  }

  res.status(status).send({
    statusCode: status,
    error: err.message
  });
}
