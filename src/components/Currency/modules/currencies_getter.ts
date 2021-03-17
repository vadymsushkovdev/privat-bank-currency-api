import * as schedule from 'node-schedule';
import currencySaver from './currency_saver';

export default function getPrivatCurrency(): any {
    const rule: any = new schedule.RecurrenceRule();

    rule.hour = 1;

    return schedule.scheduleJob(rule, () => { currencySaver().then(); });
}
