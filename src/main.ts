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

  async function createUser() {
    try {
      /* {
          id: 'clyj1wmmh0000izpo07lh36gt',
          firstName: 'Bhoomi',
          lastName: 'Sharma',
          createdAt: 2024-07-12T18:48:24.714Z,
          updatedAt: 2024-07-12T18:48:24.714Z}*/
      const user = await prisma.user.findMany({
        where: {
          firstName: 'Bhoomi',
          lastName: 'Sharma',
        },
      });
      console.log(user);
    } catch (error) {
      console.log('Error creating workshop', error);
    } finally {
      await prisma.$disconnect();
    }
  }

  createUser();
}
bootstrap();
