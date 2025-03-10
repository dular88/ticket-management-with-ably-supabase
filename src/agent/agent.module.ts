import { Module } from '@nestjs/common';
import { AgentsController } from './agent.controller';
import { AgentsService } from './agent.service';
import { SupabaseModule } from '../supabase/supabase.module';

@Module({
  imports: [SupabaseModule],
  controllers: [AgentsController],
  providers: [AgentsService],
})
export class AgentsModule {}
