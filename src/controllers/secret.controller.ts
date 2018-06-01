import config from '../config';
import { Response, Request } from 'express';
import { injectable } from 'inversify';
import { controller, httpGet } from 'inversify-express-utils';
import 'reflect-metadata';
import { AuthorizedRequest } from '../requests/authorized.request';
import { Logger } from '../logger';

@injectable()
@controller(
  '/secret',
  'OnlyAcceptApplicationJson'
)
export class SecretController {
  private logger = Logger.getInstance('SECRET_CONTROLLER');

  @httpGet(
    '/info',
    'AuthMiddleware'
  )
  async info(req: AuthorizedRequest, res: Response): Promise<void> {
    this.logger.info('get info');
    res.json({ data: config.app.serviceName });
  }

  @httpGet(
    '/status'
  )
  async status(req: Request, res: Response): Promise<void> {
    throw new Error('Error');
  }
}
