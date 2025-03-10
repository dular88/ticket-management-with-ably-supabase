import { Injectable } from '@nestjs/common';
import { SupabaseService } from 'src/supabase/supabase.service';
import { CreateAgentDto } from './dto/create-agent.dto';

@Injectable()
export class AgentsService {
  private client;

  constructor(private readonly supabaseService: SupabaseService) {
    this.client = this.supabaseService.getClient();
  }

  async createAgent(dto: CreateAgentDto) {
    const { data, error } = await this.client
      .from('agents')
      .insert(dto)
      .select();

    if (error) throw new Error(error.message);
    return data;
  }

  async getAgents() {
    const { data, error } = await this.client.from('agents').select();
    if (error) throw new Error(error.message);
    return data;
  }
}
