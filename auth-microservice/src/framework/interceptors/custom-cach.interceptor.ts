import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class MyCustomKeyInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const req: Request & { user: { id: string } } = context.switchToHttp().getRequest();

        // Todo: to refactor
        // use pattern of user-id-path-param-method
        const cacheKey = "";

        // Set the cache key on the context.
        context.switchToHttp().getResponse().setHeader('Cache-Key', cacheKey);

        // Call the next interceptor in the chain.
        return next.handle();
    }
}