import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { TodoController } from './todo.controller';

@Module({
  imports: [PrismaModule],
  controllers: [TodoController],
})
export class TodoModule {}
