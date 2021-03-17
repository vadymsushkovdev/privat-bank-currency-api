import { NextFunction, Request, Response } from 'express';
import HttpError from '../../../config/error';

export default function exceptionsAuthFilter(targetMethod: (req: Request, res: Response, next: NextFunction) => void):
    (req: Request, res: Response, next: NextFunction) => Promise<void> {
    return async function (req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            await targetMethod(req, res, next);
        } catch (error) {
            if (error.code === 500) { return next(new HttpError(error.message.status, error.message)); }

            res.json({ status: 400, message: error.message });
        }
    };
}
