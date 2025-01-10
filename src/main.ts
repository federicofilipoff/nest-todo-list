import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  // Habilitar CORS
  app.enableCors({
    origin: 'http://localhost:5173', // Dominio front-end
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  });

  // Swagger: documentación
  const config = new DocumentBuilder()
    .setTitle('Documentación de la API')
    .setDescription('API de tareas con NestJS y Prisma')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
