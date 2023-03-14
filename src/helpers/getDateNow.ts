export const getDateNow = (year?: boolean, calendar?: boolean) => {
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
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();

    if (year) {
        return yyyy;
    }
    if (calendar) {
        return `${yyyy}-${mm}-${dd}`;
    }

    return 'Date: ' + monthNames[today.getMonth()] + ' ' + dd + ',' + yyyy;
};
