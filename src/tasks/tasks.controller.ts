import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Tasks') // Nombre del grupo de endpoints
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  @ApiOperation({ summary: 'Crea un registro en la base de datos.' })
  @ApiResponse({ status: 200, description: 'Tarea creada.' })
  @ApiResponse({ status: 400, description: 'No se pudo crear registro.' })
  @ApiBody({
    description: 'Datos necesarios para crear una tarea',
    type: CreateTaskDto,
  })
  async create(@Body() createTaskDto: CreateTaskDto) {
    return await this.tasksService.create(createTaskDto);
  };

  @Get()
  @ApiOperation({ summary: 'Visualiza todos los registros de la base de datos.' })
  @ApiResponse({ status: 200, description: 'Lista de tareas.' })
  @ApiResponse({ status: 400, description: 'Error al consultar datos.' })
  async findAll() {
    return await this.tasksService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una tarea por ID' })
  @ApiResponse({ status: 200, description: 'Tarea encontrada.' })
  @ApiResponse({ status: 400, description: 'Tarea inexistente.' })
  @ApiParam({ name: 'id', description: 'ID de la tarea', type: Number })
  findOne(@Param('id') id: string) {
    return this.tasksService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar una tarea por ID' })
  @ApiResponse({ status: 200, description: 'Tarea encontrada.' })
  @ApiResponse({ status: 400, description: 'Tarea inexistente.' })
  @ApiParam({ name: 'id', description: 'ID de la tarea', type: Number })
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(+id, updateTaskDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una tarea por ID' })
  @ApiResponse({ status: 200, description: 'Tarea encontrada.' })
  @ApiResponse({ status: 400, description: 'Tarea inexistente.' })
  @ApiParam({ name: 'id', description: 'ID de la tarea', type: Number })
  remove(@Param('id') id: string) {
    return this.tasksService.remove(+id);
  }
}
