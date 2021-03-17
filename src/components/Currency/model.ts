import * as connections from '../../config/connection/connection';
import { Document, Schema } from 'mongoose';

/**
 * @export
 * @interface ICurrencyModel
 * @extends {Document}
 */
export interface ICurrencyModel extends Document {
    currency: Currencies[];
    createdAt: Date;
}

export type Currencies = {
    RUR: Rates[];
    USD: Rates[];
    EUR: Rates[];
};

export type Rates = {
    ccy: string;
    base_ccy: string;
    buy: number;
    sale: number;
};

/**
 * @swagger
 * components:
 *  schemas:
 *    CurrencySchema:
 *      required:
 *        - email
 *        - name
 *      properties:
 *        id:
 *          type: string
 *        currency:
 *          type: array
 *        createdAt:
 *          type: date
 *    Users:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/CurrencySchema'
 */
const CurrencySchema: Schema = new Schema({
    currency: {
        type: Array,
        trim: true
    },
    createdAt: {
        type: Date,
        unique: true,
    }
}, {
    collection: 'currencymodel',
    versionKey: false
});

export default connections.db.model < ICurrencyModel > ('CurrencyModel', CurrencySchema);
