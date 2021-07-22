import React, { useContext } from "react";
import { NewAddContext } from "../../../../../context/NewAddContext";
import {
    setSizeAction,
    setTotalFloorsAction,
    setPriceAction,
} from "../../../../../actions/newAddActions";
import Step from "../Step";
import InputNumber from "../../../../inputs/InputNumber";

const Step4 = () => {
    const { dispatchNewAddData } = useContext(NewAddContext);

    return (
        <Step number={4} title="תשלומים, תאריכים ועוד">
            <form>
                <InputNumber
                    id="size"
                    label="מ״ר בנוי"
                    placeholder="כמה מ״ר בנוי יש בנכס"
                    dispatch={dispatchNewAddData}
                    action={setSizeAction}
                />
                <InputNumber
                    id="total-size"
                    label="גודל במ״ר סך הכל*"
                    dispatch={dispatchNewAddData}
                    action={setTotalFloorsAction}
                />
                <InputNumber
                    id="size"
                    label="מחיר"
                    placeholder="סכום מינימלי 100,000"
                    dispatch={dispatchNewAddData}
                    action={setPriceAction}
                />
            </form>
        </Step>
    );
};

export default Step4;
