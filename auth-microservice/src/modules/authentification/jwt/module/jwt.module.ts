import { Module } from '@nestjs/common';
import { JwtStrategyService } from '../service/jwt-strategy.service';
import { ConfigurationModule } from '../../../../configuration/configuration.module';
import { ConfigurationService } from '../../../../configuration/configuration.service';

@Module({
    imports: [ConfigurationModule],
    providers: [JwtStrategyService, ConfigurationService],
    controllers: [],
})
export class JwtModule { }
