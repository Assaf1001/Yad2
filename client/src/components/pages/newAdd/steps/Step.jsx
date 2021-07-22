import React from "react";

const Step = (props) => {
    return (
        <div className="step">
            <div className="step-header">
                <div className="circle">{props.number}</div>
                <p>{props.title}</p>
            </div>
            <div className={"step-content step" + props.number}>
                {props.children}
            </div>
            {props.number !== 1 && (
                <div>
                    <button>חזרה</button>
                    <button>המשך לשלב הבא</button>
                </div>
            )}
        </div>
    );
};

export default Step;
