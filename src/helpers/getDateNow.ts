import moment from 'moment';

export const today = moment(new Date()).format('YYYY-DD-MM');
export const year = moment(new Date()).format('YYYY');
export const todayWithMonth = moment(new Date()).format('MMMM DD, YYYY');
