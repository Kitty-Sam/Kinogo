export interface CalendarPropsType {
    calendarOpen: boolean;
    setCalendarOpen: () => void;
    markedDate: string | number;
    setMarkedDate: (value: string) => void;
}
