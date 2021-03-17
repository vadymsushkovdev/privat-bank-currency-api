import { IUserModel } from '../models/model';

/**
 * @export
 * @interaface IAuthService
 */
export interface IUserService {
    /**
     * @param {IUserModel} IUserModel
     * @returns {Promise<IUserModel>}
     * @memberof AuthService
     */
    createUser(IUserModel: IUserModel): Promise < IUserModel > ;
}
