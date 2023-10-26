import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { IS_PUBLIC_KEY } from '../../../decorators/public.decorator';

@Injectable()
export class JwtAuthGuard implements CanActivate {

    constructor(
        private _jwtService: JwtService,
        private _reflector: Reflector
    ) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const isPublic = this.isPublic(context);
        if (isPublic) {
            return true;
        } else {
            this.verifyToken(context);
        }
        return true;
    }

    private isPublic(context: ExecutionContext): boolean {
        return this._reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
    }

    private extractTokenFromHeader(request: Request): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }

    private async verifyToken(context: ExecutionContext): Promise<void> {
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);
        if (!token) {
            throw new UnauthorizedException();
        }
        try {
            const payload = await this._jwtService.verifyAsync(
                token, { secret: process.env.JWT_SECRET }
            );
            request['user'] = payload;
        } catch {
            throw new UnauthorizedException();
        }
    }
}