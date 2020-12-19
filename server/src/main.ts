import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './App.module';
import { ErrorService } from './shared/services/errorService/ErrorService';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.setGlobalPrefix(process.env.API_PATH);
  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (errors) => ErrorService.createValidationError(errors),
    }),
  );

  const options = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('JS Code Api')
    .setDescription('JS Code Video Tutorial endpoints')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  app.enableCors();
  await app.listen(process.env.PORT);
}

bootstrap();
