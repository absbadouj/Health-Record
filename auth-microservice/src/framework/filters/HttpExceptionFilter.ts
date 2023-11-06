import { ExceptionFilter, Catch, HttpException, ExecutionContext } from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, context: ExecutionContext) {
        // if (exception.getStatus() === 401) {
        // Log the error
        console.error("error", exception.getResponse());
        const message = exception.getResponse() as any;

        // Send an error response to the client
        context.switchToHttp().getResponse().status(message.statusCode).send(message);
        // } else {
        //     // Throw the error again so that it can be handled by a higher-level exception filter
        //     throw exception;
        // }
    }
}