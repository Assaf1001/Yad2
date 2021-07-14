import React, { useContext, useState } from "react";
import { setDateAction } from "../../../../../actions/searchActions";
import { SearchContext } from "../../../../../context/SearchContext";
import CheckBoxButton from "../CheckBoxButton";

const DateInput = () => {
    const { dispatchSearchData } = useContext(SearchContext);

    const [isSelected, setIsSelected] = useState(false);
    const [value, setValue] = useState("");

    const getNow = () => {
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

    const onChangeSelectDate = (event) => {
        dispatchSearchData(setDateAction(event.target.value));
        setValue(event.target.value);
        setIsSelected(false);
    };

    const onClickSeleteIsNow = () => {
        if (isSelected) {
            dispatchSearchData(setDateAction(null, false));
            setIsSelected(false);
            setValue("");
        } else {
            dispatchSearchData(setDateAction(getNow(), true));
            setIsSelected(true);
            setValue(getNow());
        }
    };

    return (
        <div className="input date-input">
            <label htmlFor="date">תאריך כניסה</label>
            <div className="inputs">
                <input
                    onChange={onChangeSelectDate}
                    type="date"
                    placeholder="החל מ- הזינו תאריך"
                    pattern="\d{4}-\d{2}-\d{2}"
                    min={getNow()}
                    value={value}
                />
                <div onClick={onClickSeleteIsNow}>
                    <CheckBoxButton isSelected={isSelected} />
                    <p>כניסה מיידית</p>
                </div>
            </div>
        </div>
    );
};

export default DateInput;
