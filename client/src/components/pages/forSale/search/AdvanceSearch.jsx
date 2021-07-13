import React from "react";
import FloorInput from "./FloorInput";
import Properties from "./Properties";
import SizeInput from "./SizeInput";
import DateInput from "./DateInput";

const AdvanceSearch = () => {
    return (
        <div className="dropdown advance-search">
            <div className="dropdown-content">
                <Properties />
                <div className="part-2">
                    <FloorInput />
                    <SizeInput />
                    <DateInput />
                </div>
            </div>
        </div>
    );
};

export default AdvanceSearch;
