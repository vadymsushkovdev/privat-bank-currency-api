import { NextFunction, Request, Response } from 'express';
import HttpError from '../../../config/error';

export default function exceptionsCurrencyFilter(targetMethod: (req: Request, res: Response, next: NextFunction) => void):
    (req: Request, res: Response, next: NextFunction) => Promise<void> {
    return async function (req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            await targetMethod(req, res, next);
        } catch (error) {
            next(new HttpError(error.message.status, error.message));
        }
    };
}
