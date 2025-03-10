import { IsEnum, IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateTicketDto {
    @IsOptional()
    @IsString()
    title?: string;
  
    @IsOptional()
    @IsString()
    description?: string;
  
    @IsOptional()
    @IsEnum(['open', 'in_progress', 'resolved', 'closed'])
    status?: 'open' | 'in_progress' | 'resolved' | 'closed';
  
    @IsOptional()
    @IsEnum(['low', 'medium', 'high', 'urgent'])
    priority?: 'low' | 'medium' | 'high' | 'urgent';
  
    @IsOptional()
    @IsUUID()
    assigned_to?: string;
  }