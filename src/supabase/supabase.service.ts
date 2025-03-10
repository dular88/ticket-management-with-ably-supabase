import { Injectable } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { CONFIG } from "../config/index"

@Injectable()
export class SupabaseService {
  private client: SupabaseClient;

  constructor() {
    this.client = createClient(
      CONFIG.SUPABASE_URL,
      CONFIG.SUPABASE_KEY,
    );
  }

  getClient(): SupabaseClient {
    return this.client;
  }
}
