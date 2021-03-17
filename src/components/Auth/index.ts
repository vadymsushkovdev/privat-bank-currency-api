import AuthService from './service';
import { IUserModel } from './models/model';
import { NextFunction, Request, Response } from 'express';

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function signup(req: Request, res: Response, next: NextFunction): Promise < void > {
    const user: IUserModel = await AuthService.createUser(req.body);
    const token: string = await AuthService.getTokens(user.email);

    res.json({ status: 200, logged: true, access_token: token, message: 'Sign in successfully' });
}

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function login(req: Request, res: Response, next: NextFunction): Promise < void > {
    const user: IUserModel = await AuthService.getUser(req.body);
    const token: string = await AuthService.getTokens(user.email);

    res.json({ status: 200, logged: true, access_token: token, message: 'Sign in successfully' });
}
