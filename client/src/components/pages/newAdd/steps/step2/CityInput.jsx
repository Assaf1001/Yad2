import React, { useContext, useState } from "react";
import { NewAddContext } from "../../../../../context/NewAddContext";
import { getCity } from "../../../../../server/addressAPI";
import CityInputResultItem from "./CityInputResultItem";

const CityInput = () => {
    const { dispatchNewAddData } = useContext(NewAddContext);

    const [value, setValue] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [results, setResults] = useState([]);

    const onInputToggleIsOpen = (event) => {
        if (event.target.value.length > 0) setIsOpen(true);
        else setIsOpen(false);
    };

    const onInputSelectCity = (event) => {
        setValue(event.target.value);
        if (event.target.value.length > 1)
            getCity(event.target.value)
                .then((res) => setResults(res))
                .catch((err) => console.log(err));
    };

    return (
        <div>
            <label htmlFor="city">ישוב*</label>
            <input onInput={onInputSelectCity} type="text" id="city" />
            {results.map((resultItem, i) => (
                <CityInputResultItem key={i} resultItem={resultItem} />
            ))}
        </div>
    );
};

export default CityInput;
