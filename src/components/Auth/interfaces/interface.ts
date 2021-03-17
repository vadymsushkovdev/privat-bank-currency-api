import { IUserModel } from '../models/model';

/**
 * @export
 * @interaface IAuthService
 */
export interface IAuthService {
    /**
     * @param {IUserModel} IUserModel
     * @returns {Promise<IUserModel>}
     * @memberof AuthService
     */
    createUser(IUserModel: IUserModel): Promise < IUserModel > ;
    /**
     * @param {IUserModel} IUserModel
     * @returns {Promise<IUserModel>}
     * @memberof AuthService
     */
    getUser(IUserModel: IUserModel): Promise < IUserModel >;
    /**
     * @param {userEmail} string
     * @returns { Promise < string >}
     * @memberof AuthService
     */
    getTokens(userEmail: string): Promise < string >;
}
