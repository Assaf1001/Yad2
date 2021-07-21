import React from "react";
import NewAddContextProvider from "../../../context/NewAddContext";
import Step1 from "./steps/step1/Step1";
import Step2 from "./steps/step2/Step2";

const NewAddPage = () => {
    return (
        <div className="new-add">
            <NewAddContextProvider>
                <Step1 />
                <Step2 />
            </NewAddContextProvider>
        </div>
    );
};

export default NewAddPage;
