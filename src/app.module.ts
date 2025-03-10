import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TicketsModule } from './ticket/ticket.module';
import { AgentsModule } from './agent/agent.module';
import { AblyModule } from './ably/ably.module';
import { SupabaseModule } from './supabase/supabase.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TicketsModule,
    AgentsModule,
    AblyModule,
    SupabaseModule,
  ],
})
export class AppModule {}
