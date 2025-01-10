import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TasksService {
  constructor (private readonly prisma: PrismaService) {};

  // Buscar tarea para idenficiar si existe o no
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
    return await this.prisma.task.create({
      data: {
        descripcion,
        completada: false,
      }
    })
  };

  async findAll() {
    return await this.prisma.task.findMany();
  };

  async findOne(id: number) {
    return await this.findTaskById(id);
  };

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    const { descripcion, completada } = updateTaskDto;
    await this.findTaskById(id);
    return await this.prisma.task.update({
      where: {id},
      data: {
        descripcion,
        completada
      }
    })
  };

  async remove(id: number) {
    await this.findTaskById(id);
    return await this.prisma.task.delete({where: { id }})
  };
};
