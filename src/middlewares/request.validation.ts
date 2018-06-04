import { Response, Request, NextFunction } from 'express';

export function onlyAcceptApplicationJson(req: Request, res: Response, next: NextFunction) {
  if (req.method !== 'OPTIONS' && req.header('Accept') !== 'application/json' && req.header('Content-Type') === 'application/json') {
    return res.status(406).json({
      error: 'Unsupported "Accept" header'
    });
  } else {
    return next();
  }
}
