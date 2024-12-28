import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {

    @IsNotEmpty({ message: 'La descripción no puede estar vacía.' })
    @IsString({ message: 'La descripción debe ser texto.' })
    descripcion: string;

    @IsNotEmpty({ message: 'El estado de la tarea no puede estar vacío.'})
    @IsBoolean({message: 'El estado de la tarea debe ser: true ó false.'})
    completada?: boolean;

}
