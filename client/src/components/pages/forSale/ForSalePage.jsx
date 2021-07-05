import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import PageHeader from "./PageHeader";
import SearchBar from "./search/SearchBar";

const ForSalePage = () => {
    const { setHeaderClassName } = useContext(GlobalContext);

    useEffect(() => {
        setHeaderClassName("header page-open");

        return () => {
            setHeaderClassName("header");
        };
    }, []);

    return (
        <div className="for-sale">
            <PageHeader />
            <div className="page-content">
                <SearchBar />
            </div>
        </div>
    );
};

export default ForSalePage;
