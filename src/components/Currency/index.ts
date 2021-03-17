import CurrencyService from './service';
import { NextFunction, Request, Response } from 'express';
import { ICurrencyModel } from './models/model';

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function findAll(req: Request, res: Response, next: NextFunction): Promise < void > {
    const currency: ICurrencyModel[] = await CurrencyService.findAll();

    res.status(200).json(currency);
}

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function findOne(req: Request, res: Response, next: NextFunction): Promise < void > {
    const currency: ICurrencyModel = await CurrencyService.findOne(req.params.id);

    res.status(200).json(currency);
}

