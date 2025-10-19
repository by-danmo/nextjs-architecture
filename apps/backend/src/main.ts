/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.PORT || 4000;
  const initLogger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule);

  // redirect to docs
  app
    .getHttpAdapter()
    .getInstance()
    .get('/', (req, res) => {
      res.redirect('/docs');
    });

  await app.listen(PORT, () => {
    initLogger.verbose(
      `🚀 Application is running on: http://localhost:${PORT}`,
    );
    // trpc docs
    initLogger.verbose(
      `📖 tRPC docs is running on: http://localhost:${PORT}/docs`,
    );
  });
}
void bootstrap();
