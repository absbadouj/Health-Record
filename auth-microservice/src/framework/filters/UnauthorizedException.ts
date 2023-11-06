import { ExceptionFilter, Catch, ArgumentsHost, HttpStatus } from '@nestjs/common';
import { UnauthorizedException } from '@nestjs/common';

@Catch(UnauthorizedException)
export class UnauthorizedExceptionFilter implements ExceptionFilter {
    constructor() { }
    catch(exception: UnauthorizedException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const status = exception.getStatus() || HttpStatus.UNAUTHORIZED;
        response.status(status);
        response.send({
            statusCode: status,
            message: exception.message || 'Unauthorized',
            timestamp: new Date().toISOString(),
            path: request.url,
        });
    }
}