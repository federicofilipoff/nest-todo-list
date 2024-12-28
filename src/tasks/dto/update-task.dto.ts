import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {

    @ApiProperty({
        description: 'Descripción de la tarea.',
        example: 'Estudiar Nest',
    })    
    @IsOptional()
    @IsNotEmpty({ message: 'La descripción no puede estar vacía.' })
    @IsString({ message: 'La descripción debe ser texto.' })
    descripcion: string;

    @ApiProperty({
        description: 'Estado de la tarea (opcional).',
        example: false,
        required: false,
    })
    @IsOptional()
    @IsNotEmpty({ message: 'El estado de la tarea no puede estar vacío.'})
    @IsBoolean({message: 'El estado de la tarea debe ser: true ó false.'})
    completada?: boolean;

}
