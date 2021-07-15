import React, { useContext, useEffect, useState } from "react";
import { setAddressAction } from "../../../../../actions/searchActions";
import { SearchContext } from "../../../../../context/SearchContext";

const CityInputResultItem = ({ result, setValue, setIsOpen }) => {
    const { dispatchSearchData } = useContext(SearchContext);
    const [isResultCity, setIsResultCity] = useState(false);

    const onClickSelectAddress = () => {
        if (isResultCity) {
            dispatchSearchData(setAddressAction({ city: result.city }));
            setValue(result.city);
        } else {
            dispatchSearchData(setAddressAction(result));
            setValue(`${result.address}, ${result.city}`);
        }
        setIsOpen(false);
    };

    useEffect(() => {
        if (result.address + " " === result.city) setIsResultCity(true);
    }, [result]);

    return (
        <>
            {isResultCity ? (
                <div className="result" onClick={onClickSelectAddress}>
                    <p>{result.address}</p>
                    <span>עיר</span>
                </div>
            ) : (
                <div className="result" onClick={onClickSelectAddress}>
                    <p>
                        {result.address}, {result.city}
                    </p>
                    <span>רחוב</span>
                </div>
            )}
        </>
    );
};

export default CityInputResultItem;
