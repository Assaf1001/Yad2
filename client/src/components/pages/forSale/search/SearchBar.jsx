import React from "react";
import SearchContextProvider from "../../../../context/SearchContext";
import icons from "../../../../icons/icons";
import KindInput from "./KindInput";

const SearchBar = () => {
    return (
        <div className="search-bar">
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
                <form>
                    <div className="input">
                        <label htmlFor="city">חפשו עיר או רחוב</label>
                        <input
                            type="text"
                            id="city"
                            placeholder="לדוגמה: אשדוד"
                        />
                    </div>

                    <KindInput />

                    <label htmlFor="rooms">חדרים</label>
                    <label htmlFor="price">מחיר</label>
                    <input type="number" />
                    <input type="number" />
                    <button>{icons.plus} חיפוש מתקדם</button>
                    <button type="submit">{icons.search} חפש</button>
                </form>
            </SearchContextProvider>
        </div>
    );
};

export default SearchBar;
