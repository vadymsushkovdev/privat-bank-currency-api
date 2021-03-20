import * as Joi from 'joi';
import Validation from '../../validation';
import { ICurrencyModel } from '../models/model';

/**
 * @export
 * @class CurrencyValidation
 * @extends Validation
 */
class CurrencyValidation extends Validation {

    /**
     * Creates an instance of CurrencyValidation.
     * @memberof CurrencyValidation
     */
    constructor() {
        super();
    }

    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof CurrencyValidation
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
