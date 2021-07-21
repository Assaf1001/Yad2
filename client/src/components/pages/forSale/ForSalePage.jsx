import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import PageHeader from "./PageHeader";
import SearchBar from "./search/SearchBar";
import searchPageAdd from "../../../images/salePageAdd.jpeg";
import icons from "../../../icons/icons";

const ForSalePage = () => {
    const { setHeaderClassName } = useContext(GlobalContext);

    useEffect(() => {
        setHeaderClassName("header page-open");

        return () => {
            setHeaderClassName("header");
        };
    }, [setHeaderClassName]);

    return (
        <div className="for-sale">
            <PageHeader />
            <div className="top-section">
                <div className="title">
                    <h2>
                        ראשי <span> / נדל״ן למכירה</span>
                    </h2>
                    <div className="accessablity">
                        {icons.human}
                        <p>נגישות</p>
                    </div>
                </div>
                <img src={searchPageAdd} alt="sale-page-add" />
            </div>
            <div className="page-content">
                <SearchBar />
            </div>
        </div>
    );
};

export default ForSalePage;
