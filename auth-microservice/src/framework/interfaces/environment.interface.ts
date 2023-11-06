import { CleanedEnvAccessors } from 'envalid';

export interface Environment extends CleanedEnvAccessors {
  POSTGRES_DB: string;
  POSTGRES_USER: string;
  POSTGRES_PASSWORD: string;
  JWT_SECRET_KEY: string;
  DATABASE_URL: string;
  CACHE_TTL: number;
  RAPID_API_API_KEY: string;
  REDIS_HOST: string;
  REDIS_PASSWORD: string;
  REDIS_PORT: number;


}
