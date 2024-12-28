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

    try {
        const newTask = await this.prisma.task.create({
          data: {
            descripcion,
            completada: false,
          }
        })

        return {
          statusCode: HttpStatus.OK,
          message: 'Tarea creada.',
          result: newTask
        }

    } catch (error) {
      throw new Error(error)
    }
  };

  async findAll() {
    const allTasks = await this.prisma.task.findMany();
    try {
      return {
        statusCode: HttpStatus.OK,
        message: 'Lista de tareas.',
        result: allTasks
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  async findOne(id: number) {
    const aTask = await this.findTaskById(id);

    try {
      return {
        statusCode: HttpStatus.OK,
        message: 'Tarea encontrada.',
        result: aTask
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    const { descripcion, completada } = updateTaskDto;
    await this.findTaskById(id);

    try {
        const updatedTask =  await this.prisma.task.update({
          where: {id},
          data: {
            descripcion,
            completada
          }
        })
        return {
          statusCode: HttpStatus.OK,
          message: 'Tarea actualizada.',
          result: updatedTask
        }
    } catch (error) {
      throw new Error(error);
    }
  };

  async remove(id: number) {
    const aTask = await this.findTaskById(id);

    try {
        await this.prisma.task.delete({where: { id }})
        return {
          statusCode: HttpStatus.OK,
          message: 'Tarea eliminada.',
          result: aTask
        }
    } catch (error) {
      throw new Error(error);
    }
  };
};
