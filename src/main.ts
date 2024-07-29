import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaClient } from '@prisma/client';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const prisma = new PrismaClient();
  const cors = require('cors');
  app.use(
    cors({
      origin: 'http://localhost:3000',
    }),
  );

  const PORT = process.env.PORT || 3001;
  await app.listen(PORT);
  console.log('App is listening on port', PORT);
}
bootstrap();
