import * as Joi from 'joi';
import Validation from '../../validation';
import { ICurrencyModel } from '../models/model';

/**
 * @export
 * @class UserValidation
 * @extends Validation
 */
class CurrencyValidation extends Validation {

    /**
     * Creates an instance of UserValidation.
     * @memberof UserValidation
     */
    constructor() {
        super();
    }

    /**
     * @param {IUserModel} params
     * @returns {Joi.ValidationResult<IUserModel >}
     * @memberof UserValidation
     */
    createCurrency(
        params: ICurrencyModel
    ): Joi.ValidationResult < ICurrencyModel > {
        const schema: Joi.Schema = Joi.object().keys({

        });

        return Joi.validate(params, schema);
    }

    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof UserValidation
     */
    getCurrency(
        body: {
            id: string
        }
    ): Joi.ValidationResult < {
        id: string
    } > {
        const schema: Joi.Schema = Joi.object().keys({
            id: this.customJoi.objectId().required()
        });

        return Joi.validate(body, schema);
    }
}

export default new CurrencyValidation();
