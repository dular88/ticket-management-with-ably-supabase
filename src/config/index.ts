import * as dotenv from 'dotenv';
dotenv.config();


interface Config {
  APP_NAME: string;
  APP_PORT: number;
  NODE_ENV: string;
  ABLY_API_KEY: string;
  SUPABASE_URL: string;
  SUPABASE_KEY: string;
}

export const CONFIG: Readonly<Config> = Object.freeze({
  APP_NAME: process.env.APP_NAME || "TicketApp",
  APP_PORT: Number(process.env.APP_PORT) || 3000,
  NODE_ENV: process.env.NODE_ENV || "development",
  ABLY_API_KEY: process.env.ABLY_API_KEY || "",
  SUPABASE_URL: process.env.SUPABASE_URL || "",
  SUPABASE_KEY: process.env.SUPABASE_KEY || "",
});

// Validate the configuration during startup
export function validateConfig(): void {
  const requiredVars: (keyof Config)[] = [
    "APP_NAME",
    "APP_PORT",
    "NODE_ENV",
    "ABLY_API_KEY",
    "SUPABASE_URL",
    "SUPABASE_KEY",
  ];

  const missingVars = requiredVars.filter((key) => !CONFIG[key]);

  if (missingVars.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingVars.join(", ")}`
    );
  }
}

// Call validateConfig during app initialization
validateConfig();
