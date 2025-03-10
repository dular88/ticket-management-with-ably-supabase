import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Param,
  Body,
  Query,
} from '@nestjs/common';
import { TicketsService } from './ticket.service';
import { CreateTicketDto, UpdateTicketDto } from './dto/create-ticket.dto';

@Controller('api/tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @Post()
  async createTicket(@Body() createTicketDto: CreateTicketDto) {
    return await this.ticketsService.createTicket(createTicketDto);
  }

  @Get()
  async getTickets(@Query() filters: Partial<CreateTicketDto>) {
    return await this.ticketsService.getTickets(filters);
  }

  @Get(':id')
  async getTicketById(@Param('id') id: string) {
    return await this.ticketsService.getTicketById(id);
  }

  @Patch(':id')
  async updateTicket(
    @Param('id') id: string,
    @Body() updateTicketDto: UpdateTicketDto,
  ) {
    return await this.ticketsService.updateTicket(id, updateTicketDto);
  }

  @Delete(':id')
  async deleteTicket(@Param('id') id: string) {
    return await this.ticketsService.deleteTicket(id);
  }
}
