import React from "react";

const DateInput = () => {
    const getNow = () => {
        const date = new Date();
        const [month, day, year] = [
            date.getMonth().length === 1
                ? date.getMonth()
                : `0${date.getMonth()}`,
            date.getDate().length === 1 ? date.getDate() : `0${date.getDate()}`,
            date.getFullYear(),
        ];
        console.log(date);
        return `${year}-${month}-${day}`;
    };

    const onChangeSelectDate = (event) => {
        console.log(event.target.value);
    };

    return (
        <div className="input date-input">
            <label htmlFor="date">תאריך כניסה</label>
            <input
                onChange={onChangeSelectDate}
                type="date"
                placeholder="החל מ- הזינו תאריך"
                pattern="\d{4}-\d{2}-\d{2}"
                min={getNow()}
            />
            {console.log(getNow())}
        </div>
    );
};

export default DateInput;
