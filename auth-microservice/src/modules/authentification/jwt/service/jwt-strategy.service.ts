import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { ConfigurationService } from '../../../../framework/configuration/configuration.service';


@Injectable()
export class JwtStrategyService extends PassportStrategy(Strategy, "jwt") {
    constructor(private readonly configService: ConfigurationService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get('JWT_SECRET_KEY'),
        });
    }

    async validate(payload: any) {
        return { userId: payload.id, username: payload.username };
    }
}


