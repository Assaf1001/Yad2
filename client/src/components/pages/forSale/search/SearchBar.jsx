import React, { createRef } from "react";
import SearchContextProvider from "../../../../context/SearchContext";
import SearchForm from "./SearchForm";
import icons from "../../../../icons/icons";

const SearchBar = () => {
    const searchBarRef = createRef();

    return (
        <div className="search-bar" ref={searchBarRef}>
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
                <SearchForm searchBarRef={searchBarRef} />
            </SearchContextProvider>
        </div>
    );
};

export default SearchBar;
