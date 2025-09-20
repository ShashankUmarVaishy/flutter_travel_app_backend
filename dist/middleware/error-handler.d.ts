import type { Request, Response } from 'express';
type NextFunction = (err?: any) => void;
interface CustomError extends Error {
    statusCode?: number;
    isOperational?: boolean;
}
export declare const errorHandler: (err: CustomError, req: Request, res: Response, next: NextFunction) => void;
export declare const createError: (message: string, statusCode?: number) => CustomError;
export {};
//# sourceMappingURL=error-handler.d.ts.map