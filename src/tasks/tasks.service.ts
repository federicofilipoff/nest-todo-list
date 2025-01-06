import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TasksService {
  constructor (private readonly prisma: PrismaService) {};

  private async findTaskById(id: number) {
    const aTask = await this.prisma.task.findUnique({where: { id }});
    if (aTask) {
      return aTask
    } else {
      throw new HttpException(
        `La tarea con ID ${id} no existe.`,
        HttpStatus.NOT_FOUND
      );
    }
  }

  async create(createTaskDto: CreateTaskDto) {
    const { descripcion } = createTaskDto;
    const newTask = await this.prisma.task.create({
      data: {
        descripcion,
        completada: false,
      }
    })
    return {
      statusCode: HttpStatus.OK,
      message: 'Registro creado',
      result: newTask
    }
  };

  async findAll() {
    const allTasks = await this.prisma.task.findMany();
    return {
      statusCode: HttpStatus.OK,
      message: 'Lista de registros',
      result: allTasks
    }
  };

  async findOne(id: number) {
    const aTask = await this.findTaskById(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'Registro encontrado',
      result: aTask
    }
  };

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    const { descripcion, completada } = updateTaskDto;
    await this.findTaskById(id);
    const updatedTask =  await this.prisma.task.update({
      where: {id},
      data: {
        descripcion,
        completada
      }
    })
    return {
      statusCode: HttpStatus.OK,
      message: 'Registro actualizado',
      result: updatedTask
    }
  };

  async remove(id: number) {
    const aTask = await this.findTaskById(id);
    await this.prisma.task.delete({where: { id }})
    return {
      statusCode: HttpStatus.OK,
      message: 'Registro eliminado',
      result: aTask
    }
  };
};
