import { Injectable, Logger } from '@nestjs/common';
import { MiddlewareOptions, TRPCMiddleware } from 'nestjs-trpc';
import { measureDuration } from 'src/utils/measure-duration';

@Injectable()
export class LoggerMiddleware implements TRPCMiddleware {
  private readonly logger = new Logger(LoggerMiddleware.name);
  private readonly measureDuration = measureDuration();

  async use({ next, path, type, ctx }: MiddlewareOptions) {
    this.measureDuration.startMeasurement();
    const result = await next();

    const { req, res } = ctx as any;

    const meta = {
      path,
      type,
      duration: this.measureDuration.endMeasurement(),
      method: req?.method,
      stautsCode: res?.statusCode,
      ip: req?.ip,
    };

    result.ok
      ? this.logger.log('👍 Success', meta)
      : this.logger.error('👎 Error', meta);

    return result;
  }
}
