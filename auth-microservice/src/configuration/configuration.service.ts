import { Injectable } from '@nestjs/common';
import { cleanEnv, num, str } from 'envalid';
import { Environment } from 'src/interfaces/environment.interface';

@Injectable()
export class ConfigurationService {

  private readonly environmentConfiguration: Environment;

  public constructor() {
    this.environmentConfiguration = cleanEnv(process.env, {
      POSTGRES_DB: str(),
      POSTGRES_USER: str({ default: '' }),
      POSTGRES_PASSWORD: str({ default: '' }),
      JWT_SECRET_KEY: str({}),
      DATABASE_URL: str({ default: '' }),
      CACHE_TTL: num({ default: 10 }),
      REDIS_PORT: num({ default: 6379 }),
      RAPID_API_API_KEY: str({ default: '' }),
      REDIS_HOST: str({ default: '' }),
      REDIS_PASSWORD: str({ default: '' }),
    });
  }

  public get<K extends keyof Environment>(key: K): Environment[K] {
    return this.environmentConfiguration[key];
  }
}
