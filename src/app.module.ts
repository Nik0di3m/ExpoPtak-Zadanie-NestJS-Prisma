import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoController } from './todo/todo.controller';
import { TodoModule } from './todo/todo.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [TodoModule, PrismaModule],
  controllers: [AppController, TodoController],
  providers: [AppService],
})
export class AppModule {}
