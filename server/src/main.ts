import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/App.module';
import { DevKeys } from './shared/keys/keys.dev';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true, logger: ['log', 'error', 'warn'] });

  app.setGlobalPrefix(DevKeys.ApiPath);
  await app.listen(DevKeys.Port);
}

bootstrap();
