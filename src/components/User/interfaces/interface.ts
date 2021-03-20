import { IUserModel } from '../models/model';

/**
 * @export
 * @interaface IUserService
 */
export interface IUserService {
    /**
     * @param {IUserModel} IUserModel
     * @returns {Promise<IUserModel>}
     * @memberof AuthService
     */
    createUser(IUserModel: IUserModel): Promise < IUserModel > ;
}
