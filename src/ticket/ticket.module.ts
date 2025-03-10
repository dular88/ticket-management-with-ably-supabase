import { Module } from '@nestjs/common';
import { TicketsController } from './ticket.controller';
import { TicketsService } from './ticket.service';
import { SupabaseModule } from '../supabase/supabase.module';
import { AblyModule } from '../ably/ably.module';

@Module({
  imports: [SupabaseModule, AblyModule],
  controllers: [TicketsController],
  providers: [TicketsService],
})
export class TicketsModule {}
