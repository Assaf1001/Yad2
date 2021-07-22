import React from "react";
import Step from "../Step";
import KindInput from "./inputs/KindInput";
import ConditionInput from "./inputs/ConditionInput";
import CityInput from "./inputs/CityInput";
import StreetInput from "./inputs/StreetInput";
import HouseNumberInput from "./inputs/HouseNubmerInput";
import FloorInput from "./inputs/FloorInput";

const Step2 = () => {
    return (
        <Step number={2} title={"כתובת הנכס"}>
            <form>
                <KindInput />
                <ConditionInput />
                <CityInput />
                <StreetInput />
                <HouseNumberInput />
                <FloorInput />
                <div>
                    <p>
                        אני רוצה לקבל עדכון חודשי במייל עם הערכת שווי מעודכנת
                        עבור הנכס, עסקאות באזור והצעות מקצועיות מיועצי נדל"ן
                    </p>
                </div>
            </form>
        </Step>
    );
};

export default Step2;
