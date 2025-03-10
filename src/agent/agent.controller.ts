import { Controller, Post, Get, Body } from '@nestjs/common';
import { AgentsService } from './agent.service';
import { CreateAgentDto } from './dto/create-agent.dto';

@Controller('api/agents')
export class AgentsController {
  constructor(private readonly agentsService: AgentsService) {}

  @Post()
  async createAgent(@Body() createAgentDto: CreateAgentDto) {
    return await this.agentsService.createAgent(createAgentDto);
  }

  @Get()
  async getAgents() {
    return await this.agentsService.getAgents();
  }
}
