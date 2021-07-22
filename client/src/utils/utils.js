export const getNow = () => {
    const date = new Date();
    const [month, day, year] = [
        date.getMonth().toString().length === 1
            ? `0${date.getMonth()}`
            : date.getMonth(),
        date.getDate().toString().length === 1
            ? `0${date.getDate()}`
            : date.getDate(),
        date.getFullYear(),
    ];

    return `${year}-${month}-${day}`;
};
