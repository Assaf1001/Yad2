import React from "react";
import NewAddContextProvider from "../../../context/NewAddContext";
import Step1 from "./steps/step1/Step1";
import Step2 from "./steps/step2/Step2";
import Step3 from "./steps/step3/Step3";
import Step4 from "./steps/step4/Step4";

const NewAddPage = () => {
    return (
        <div className="new-add">
            <NewAddContextProvider>
                <Step1 />
                <Step2 />
                <Step3 />
                <Step4 />
            </NewAddContextProvider>
        </div>
    );
};

export default NewAddPage;
