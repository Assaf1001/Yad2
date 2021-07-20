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
                <h2>
                    נדל״ן למכירה / <span>ראשי</span>
                </h2>
                <div className="accessablity">
                    {icons.human}
                    <p>נגישות</p>
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
