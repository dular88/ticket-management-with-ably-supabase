import { Injectable } from '@nestjs/common';
import { SupabaseService } from 'src/supabase/supabase.service';
import { AblyService } from 'src/ably/ably.service';
import { CreateTicketDto, UpdateTicketDto } from './dto/create-ticket.dto';

@Injectable()
export class TicketsService {
  private client;

  constructor(
    private readonly supabaseService: SupabaseService,
    private readonly ablyService: AblyService,
  ) {
    this.client = this.supabaseService.getClient();
  }

  async createTicket(dto: CreateTicketDto) {
    const { data, error } = await this.client
      .from('tickets')
      .insert(dto)
      .select();

    if (error) throw new Error(error.message);

    this.ablyService.publish('tickets', 'ticket_created', data);
    return data;
  }

  async getTickets(filters?: Partial<CreateTicketDto>) {
    const query = this.client.from('tickets').select();
    Object.entries(filters || {}).forEach(([key, value]) => query.eq(key, value));

    const { data, error } = await query;
    if (error) throw new Error(error.message);
    return data;
  }

  async getTicketById(id: string) {
    const { data, error } = await this.client
      .from('tickets')
      .select()
      .eq('id', id)
      .single();

    if (error) throw new Error(error.message);
    return data;
  }

  async updateTicket(id: string, dto: UpdateTicketDto) {
    const { data, error } = await this.client
      .from('tickets')
      .update(dto)
      .eq('id', id)
      .select();

    if (error) throw new Error(error.message);

    this.ablyService.publish('tickets', 'ticket_updated', data);
    return data;
  }

  async deleteTicket(id: string) {
    const { data, error } = await this.client
      .from('tickets')
      .delete()
      .eq('id', id);

    if (error) throw new Error(error.message);
    return data;
  }
}
