import AuthService from './service';
import { IUserModel } from '../User/models/model';
import { Request, Response } from 'express';
import UserService from '../User/service';

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @returns {Promise < void >}
 */
export async function signup(req: Request, res: Response): Promise < void > {
    const user: IUserModel = await UserService.createUser(req.body);
    const token: string = await AuthService.getTokens(user.email);

    res.json({ status: 200, logged: true, access_token: token, message: 'Sign in successfully' });
}

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @returns {Promise < void >}
 */
export async function login(req: Request, res: Response): Promise < void > {
    const user: IUserModel = await AuthService.getUser(req.body);
    const token: string = await AuthService.getTokens(user.email);

    res.json({ status: 200, logged: true, access_token: token, message: 'Sign in successfully' });
}
