export const getDateNow = (year?: boolean) => {
    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const yyyy = today.getFullYear();

    if (year) {
        return yyyy;
    }

    const day = new Date();
    return 'Date: ' + monthNames[day.getMonth()] + ' ' + dd + ',' + yyyy;
};
