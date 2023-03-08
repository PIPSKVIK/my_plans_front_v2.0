import moment from 'moment/moment';

export interface DayType {
    num: string;
    dayOfWeek: string | number;
    full: string;
    date: moment.Moment;
    isCurrentDate: boolean;
    shifts: object;
    week?: string | number;
}

export interface dayOfWeekType {
    dayOfWeek: string | number;
}
