import { IsEnum, IsOptional, IsString, IsUUID } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateTicketDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsEnum(['open', 'in_progress', 'resolved', 'closed'])
  status: 'open' | 'in_progress' | 'resolved' | 'closed';

  @IsEnum(['low', 'medium', 'high', 'urgent'])
  priority: 'low' | 'medium' | 'high' | 'urgent';

  @IsUUID()
  @IsOptional()
  assigned_to?: string;
}

export class UpdateTicketDto extends PartialType(CreateTicketDto) {}
