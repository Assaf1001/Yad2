import React, { useContext, useState } from "react";
import { setDecriptionAction } from "../../../../../../actions/newAddActions";
import { NewAddContext } from "../../../../../../context/NewAddContext";

const DescriptionInput = () => {
    const { dispatchNewAddData } = useContext(NewAddContext);
    const [charCounter, setCharCounter] = useState(0);

    const onChangeSetDescription = (event) => {
        dispatchNewAddData(setDecriptionAction(event.target.value));
        setCharCounter(event.target.value.length);
    };

    return (
        <div>
            <h3>מה חשוב לך שידעו על הנכס</h3>
            <div>
                <label htmlFor="description">פרוט הנכס</label>
                <p>{charCounter}/400</p>
                <textarea
                    onChange={onChangeSetDescription}
                    id="description"
                    cols="30"
                    rows="10"
                    maxLength="400"
                    placeholder="זה המקום לתאר את הפרטים הבולטים, למשל, האם נערך שיפוץ במבנה, מה שופץ, כיווני אוויר,האווירה ברחוב וכ׳"
                ></textarea>
            </div>
        </div>
    );
};

export default DescriptionInput;
