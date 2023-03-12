export interface ISession {
    id: string;
    dateStart: string;
    dateEnd: string;
    type: string;
    seats: number;
}
export const schedule: ISession[] = [
    {
        id: '1',
        dateStart: '2:30 PM',
        dateEnd: '4:25 PM',
        type: '1D',
        seats: 15,
    },
    {
        id: '2',
        dateStart: '2:50 PM',
        dateEnd: '4:55 PM',
        type: '2D',
        seats: 15,
    },
    {
        id: '3',
        dateStart: '6:25 PM',
        dateEnd: '8:30 PM',
        type: '3D',
        seats: 12,
    },
    {
        id: '4',
        dateStart: '6:40 PM',
        dateEnd: '8:50 PM',
        type: '2D',
        seats: 8,
    },
    {
        id: '12',
        dateStart: '2:30 PM',
        dateEnd: '4:25 PM',
        type: '1D',
        seats: 15,
    },
    {
        id: '22',
        dateStart: '2:50 PM',
        dateEnd: '4:55 PM',
        type: '2D',
        seats: 15,
    },
    {
        id: '32',
        dateStart: '6:25 PM',
        dateEnd: '8:30 PM',
        type: '3D',
        seats: 12,
    },
    {
        id: '42',
        dateStart: '6:40 PM',
        dateEnd: '8:50 PM',
        type: '2D',
        seats: 8,
    },
];

export enum SeatType {
    AVAILABLE = 'available',
    RESERVED = 'reserved',
    SELECTED = 'selected',
}

export const seatsSorts = [SeatType.AVAILABLE, SeatType.RESERVED, SeatType.SELECTED];

export const seat = { id: '', type: SeatType.AVAILABLE };

export const seatsLeftArr = Array(34)
    .fill(seat)
    .map((el, i) => {
        return { ...el, id: i.toString() };
    });

export const seatsRightArr = Array(34)
    .fill(seat)
    .map((el, i) => {
        return { ...el, id: (34 + i).toString() };
    });
