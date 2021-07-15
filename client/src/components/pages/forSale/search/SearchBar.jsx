import React, { createRef, useState } from "react";
import SearchContextProvider from "../../../../context/SearchContext";
import useOnClickOutsideClose from "../../../../hooks/useOnClickOutsideClose";
import icons from "../../../../icons/icons";
import AdvanceSearch from "./AdvanceSearch";
import CityInput from "./inputs/CityInput";
import KindInput from "./inputs/KindInput";
import PriceInput from "./inputs/PriceInput";
import RoomsInput from "./inputs/RoomsInput";

const SearchBar = () => {
    const ref = createRef();

    const [isOpen, setIsOpen] = useState(false);

    const onInputToggleIsOpen = () => {
        if (isOpen) setIsOpen(false);
        else setIsOpen(true);
    };

    const onSubmitSearchForm = (event) => {
        event.preventDefault();

        console.log("submited");
    };

    useOnClickOutsideClose(ref, () => {
        setIsOpen(false);
    });

    return (
        <div className="search-bar" ref={ref}>
            <SearchContextProvider>
                <div className="search-header">
                    <h2>
                        איזה נכס ל<span>מכירה</span> תרצו לחפש?
                    </h2>
                    <div className="mail-notification">
                        <div className="tooltip">
                            <p>
                                בחרו איזור וכמות חדרים או איזור ומחיר כדי להתחיל
                            </p>
                            <div className="triangle"></div>
                        </div>
                        {icons.bell} קבלו התראות במייל על החיפוש
                    </div>
                </div>
                <form onSubmit={onSubmitSearchForm} autoComplete="off">
                    <CityInput />
                    <KindInput />
                    <RoomsInput />
                    <PriceInput />
                    <button
                        type="button"
                        className="advance-button"
                        onClick={onInputToggleIsOpen}
                    >
                        {icons.plus} חיפוש מתקדם
                    </button>
                    <button type="submit">{icons.search} חיפוש</button>
                    {isOpen && <AdvanceSearch />}
                </form>
            </SearchContextProvider>
        </div>
    );
};

export default SearchBar;
