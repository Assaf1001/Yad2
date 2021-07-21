import React, { useContext } from "react";
import { setKindAction } from "../../../../../actions/newAddActions";
import { NewAddContext } from "../../../../../context/NewAddContext";
import step2Data from "../data/step2Data";

const KindInput = () => {
    const { dispatchNewAddData } = useContext(NewAddContext);

    const onChangeSelecKind = (event) => {
        dispatchNewAddData(setKindAction(event.target.value));
    };

    return (
        <div>
            <label htmlFor="kind">סוג הנכס*</label>
            <select
                onChange={onChangeSelecKind}
                id="kind"
                placeholder="דירה או אולי פנטהאוס?"
            >
                <option hidden="hidden">דירה או אולי פנטהאוס?</option>
                {step2Data.kind.map((option, i) => (
                    <option key={i}>{option}</option>
                ))}
            </select>
        </div>
    );
};

export default KindInput;
