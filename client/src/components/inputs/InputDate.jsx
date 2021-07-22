import React, { useState } from "react";
import { getNow } from "../../utils/utils";
import CheckBoxButton from "../pages/forSale/search/CheckBoxButton";

const InputDate = ({ id, label, placeholder, dispatch, action }) => {
    const [isCheckBoxSelected, setIsCheckBoxSelected] = useState(false);
    const [value, setValue] = useState("");

    const onChangeDispatch = (event) => {
        dispatch(action(event.target.value));
        setValue(event.target.value);
        setIsCheckBoxSelected(false);
    };

    const onClickSeleteIsNow = () => {
        if (isCheckBoxSelected) {
            dispatch(action(null));
            setIsCheckBoxSelected(false);
            setValue("");
        } else {
            dispatch(action(getNow()));
            setIsCheckBoxSelected(true);
            setValue(getNow());
        }
    };

    return (
        <div className="input date-input">
            <label htmlFor={id}>{label}</label>
            <div className="inputs">
                <input
                    onChange={onChangeDispatch}
                    type="date"
                    placeholder={placeholder}
                    pattern="\d{4}-\d{2}-\d{2}"
                    min={getNow()}
                    value={value}
                />
                <div onClick={onClickSeleteIsNow}>
                    <CheckBoxButton isSelected={isCheckBoxSelected} />
                    <p>כניסה מיידית</p>
                </div>
            </div>
        </div>
    );
};

export default InputDate;
// import React, { useState } from "react";
// import { getNow } from "../../utils";

// const InputDate = ({ id, label, placeholder, dispatch, action }) => {
//     const [isCheckBoxSelected, setIsCheckBoxSelected] = useState(false);
//     const [value, setValue] = useState("");

//     const onChangeDispatch = (event) => {
//         dispatch(action(event.target.value));
//         setValue(event.target.value);
//         setIsCheckBoxSelected(false)
//     };

//     const onClickSeleteIsNow = () => {
//         if (isCheckBoxSelected) {
//             dispatch(action(null));
//             setIsSelected(false);
//             setValue("");
//         } else {
//             dispatchSearchData(setDateAction(getNow()));
//             setIsSelected(true);
//             setValue(getNow());
//         }
//     };

//     return (
//         <div className="input date-input">
//             <label htmlFor={id}>{label}</label>
//             <div className="inputs">
//                 <input
//                     onChange={onChangeDispatch}
//                     type="date"
//                     placeholder={placeholder}
//                     pattern="\d{4}-\d{2}-\d{2}"
//                     min={getNow()}
//                     value={value}
//                 />
//                 <div onClick={onClickSeleteIsNow}>
//                     <CheckBoxButton isSelected={isSelected} />
//                     <p>כניסה מיידית</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default InputDate;
