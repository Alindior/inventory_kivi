import { NestFactory } from '@nestjs/core';
import { AppModule } from './App.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix(process.env.API_PATH);
  await app.listen(process.env.PORT);
}

bootstrap();
