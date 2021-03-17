import * as Joi from 'joi';
import CurrencyModel, { ICurrencyModel } from './models/model';
import CurrencyValidation from './validations/validation';
import { ICurrencyService } from './interfaces/interface';
import { Types } from 'mongoose';

/**
 * @export
 * @implements {ICurrencyModel}
 */
const CurrencyService: ICurrencyService = {
    /**
     * @returns {Promise < IUserModel[] >}
     * @memberof UserService
     */
    async findAll(): Promise < ICurrencyModel[] > {
        try {
            return await CurrencyModel.find({});
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IUserModel >}
     * @memberof UserService
     */
    async findOne(id: string): Promise < ICurrencyModel > {
        try {
            const validate: Joi.ValidationResult < {
                id: string
            } > = CurrencyValidation.getCurrency({
                id
            });

            if (validate.error) { throw new Error(validate.error.message); }

            return await CurrencyModel.findOne({ _id: Types.ObjectId(id) });
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {ICurrencyModel} currency
     * @returns {Promise < ICurrencyModel >}
     * @memberof CurrencyService
     */
    async insert(body: ICurrencyModel): Promise < ICurrencyModel > {
        try {
           // const validate: Joi.ValidationResult < ICurrencyModel > = CurrencyValidation.createCurrency(body);

           // if (validate.error) { throw new Error(validate.error.message); }

            const currency: ICurrencyModel = await CurrencyModel.create(body);

            return currency;
        } catch (error) {
            throw new Error(error.message);
        }
    }
};

export default CurrencyService;
