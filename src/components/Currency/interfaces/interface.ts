import { ICurrencyModel } from '../models/model';

/**
 * @export
 * @interface ICurrencyService
 */
export interface ICurrencyService {

    /**
     * @returns {Promise<ICurrencyModel[]>}
     * @memberof ICurrencyService
     */
    findAll(): Promise<ICurrencyModel[]>;

    /**
     * @param {string} code
     * @returns {Promise<ICurrencyModel>}
     * @memberof ICurrencyService
     */
    findOne(code: string): Promise<ICurrencyModel>;

    /**
     * @param {ICurrencyModel} ICurrencyModel
     * @returns {Promise<ICurrencyModel>}
     * @memberof ICurrencyService
     */
    insert(ICurrencyModel: ICurrencyModel): Promise<ICurrencyModel>;
}
