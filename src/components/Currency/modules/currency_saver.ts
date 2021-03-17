import axios, { AxiosResponse } from 'axios';
import CurrencyService from '../service';
import { ICurrencyModel } from '../models/model';

export default async function currencySaver(): Promise<ICurrencyModel> {
    const got_currency: AxiosResponse = await axios({
        url: 'https://api.privatbank.ua/p24api/pubinfo',
        method: 'get',
        params: {
            json: '',
            exchange: '',
            coursid: 5
        }
    });
    const currencyConfig: any = { currency: got_currency.data, createdAt: Date.now() };

    return CurrencyService.insert(currencyConfig);
}
