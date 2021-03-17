import { ICurrencyModel } from '../models/model';

/**
 * @export
 * @interface ICurrencyService
 */
export interface ICurrencyService {

    /**
     * @returns {Promise<IUserModel[]>}
     * @memberof IUserService
     */
    findAll(): Promise<ICurrencyModel[]>;

    /**
     * @param {string} code
     * @returns {Promise<IUserModel>}
     * @memberof IUserService
     */
    findOne(code: string): Promise<ICurrencyModel>;

    /**
     * @param {ICurrencyModel} ICurrencyModel
     * @returns {Promise<ICurrencyModel>}
     * @memberof ICurrencyService
     */
    insert(ICurrencyModel: ICurrencyModel): Promise<ICurrencyModel>;
}
