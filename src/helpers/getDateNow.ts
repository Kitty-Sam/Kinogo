import moment from 'moment';

export const today = moment(new Date()).format('YYYY-DD-MM');
export const todayWithMonth = moment(new Date()).format('MMMM DD, YYYY');
