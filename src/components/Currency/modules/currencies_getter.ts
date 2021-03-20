import * as schedule from 'node-schedule';
import currencySaver from './currency_saver';


export default function getPrivatCurrency(): schedule.Job {
    const rule: schedule.RecurrenceRule = new schedule.RecurrenceRule();

    rule.hour = process.env.HOURS_TO_UPDATE;

    return schedule.scheduleJob(rule, () => { currencySaver().then(); });
}
