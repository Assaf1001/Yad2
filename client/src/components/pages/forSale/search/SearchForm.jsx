import React, { useContext, useState } from "react";
import useOnClickOutsideClose from "../../../../hooks/useOnClickOutsideClose";
import CityInput from "./inputs/CityInput";
import KindInput from "./inputs/KindInput";
import PriceInput from "./inputs/PriceInput";
import RoomsInput from "./inputs/RoomsInput";
import AdvanceSearch from "./AdvanceSearch";
import icons from "../../../../icons/icons";
import { SearchContext } from "../../../../context/SearchContext";

const SearchForm = ({ searchBarRef }) => {
    const { searchData } = useContext(SearchContext);
    const [isOpen, setIsOpen] = useState(false);

    const onInputToggleIsOpen = () => {
        if (isOpen) setIsOpen(false);
        else setIsOpen(true);
    };

    const onSubmitSearchForm = (event) => {
        event.preventDefault();

        console.log(searchData);
    };

    useOnClickOutsideClose(searchBarRef, () => {
        setIsOpen(false);
    });

    return (
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
    );
};

export default SearchForm;
