import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3100);
  console.log(`Nest application successfully started`);
  console.log(`Application is running on: http://localhost:${3100}`);
}
bootstrap();
