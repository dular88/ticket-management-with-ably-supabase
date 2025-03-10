import * as Ably from 'ably';
import { CONFIG } from 'src/config/index';

export class AblyService {
  private ablyClient: Ably.Realtime;

  constructor() {
    const apiKey = CONFIG.ABLY_API_KEY;
    console.log('ABLY_API_KEY:', apiKey);
    if (!apiKey) {
      throw new Error('ABLY_API_KEY is not defined in the environment variables.');
    }
    this.ablyClient = new Ably.Realtime({ key: apiKey });
  }

  async publish(channel: string, event: string, data: any): Promise<void> {
    const ablyChannel = this.ablyClient.channels.get(channel);
    try {
      await ablyChannel.publish(event, data); // Publish without callback
      console.log(`Message published to channel: ${channel}, event: ${event}`);
    } catch (err) {
      console.error('Ably publish error:', err);
      throw err; // Optionally rethrow the error for further handling
    }
  }
}
