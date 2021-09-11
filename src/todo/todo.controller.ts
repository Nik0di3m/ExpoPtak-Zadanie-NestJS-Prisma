import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TodoDto } from './todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly prismaService: PrismaService) {}
  @Get()
  async findAll(): Promise<TodoDto[]> {
    return this.prismaService.todo.findMany();
  }
  @Post()
  async createTodo(@Body() { task, isComplited }: TodoDto): Promise<TodoDto> {
    return this.prismaService.todo.create({
      data: {
        task,
        isComplited,
      },
    });
  }
  @Patch()
  async updateTodo(@Body() { id, isComplited }: TodoDto): Promise<TodoDto> {
    return this.prismaService.todo.update({
      where: {
        id: id,
      },
      data: {
        isComplited: isComplited,
      },
    });
  }
  @Delete()
  async deleteTodo(@Body() { id }: TodoDto): Promise<TodoDto> {
    return this.prismaService.todo.delete({
      where: {
        id: id,
      },
    });
  }
}
