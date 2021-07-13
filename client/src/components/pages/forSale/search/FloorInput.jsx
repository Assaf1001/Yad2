import React, { createRef, useContext, useState } from "react";
import {
    setMaxFloorAction,
    setMinFloorAction,
} from "../../../../actions/searchActions";
import { SearchContext } from "../../../../context/SearchContext";
import useOnClickOutsideClose from "../../../../hooks/useOnClickOutsiteClose";
import Dropdown from "./Dropdown";

const FloorInput = () => {
    const minFloorInputRef = createRef();
    const maxFloorInputRef = createRef();

    const { searchData, dispatchSearchData } = useContext(SearchContext);

    const [isMinRoomsOpen, setIsMinRoomsOpen] = useState(false);
    const [isMaxRoomsOpen, setIsMaxRoomsOpen] = useState(false);

    const onClickToggleIsMinRoomsOpen = () => {
        if (isMinRoomsOpen) setIsMinRoomsOpen(false);
        else setIsMinRoomsOpen(true);
        if (isMaxRoomsOpen) setIsMaxRoomsOpen(false);
    };

    const onClickToggleIsMaxRoomsOpen = () => {
        if (isMaxRoomsOpen) setIsMaxRoomsOpen(false);
        else setIsMaxRoomsOpen(true);
        if (isMinRoomsOpen) setIsMinRoomsOpen(false);
    };

    const onClickSelectMinFloor = (event) => {
        dispatchSearchData(setMinFloorAction(event.target.innerHTML));
        setIsMinRoomsOpen(false);
    };

    const onClickSelectMaxFloor = (event) => {
        dispatchSearchData(setMaxFloorAction(event.target.innerHTML));
        setIsMaxRoomsOpen(false);
    };

    const generateFloorList = () => {
        const floorList = [];
        floorList[0] = "הכל";
        floorList[1] = "מרתף/פרטר";
        for (let num = 1; num <= 17; num++) {
            floorList.push(num);
        }
        return floorList;
    };

    useOnClickOutsideClose(minFloorInputRef, () => {
        setIsMinRoomsOpen(false);
    });

    useOnClickOutsideClose(maxFloorInputRef, () => {
        setIsMaxRoomsOpen(false);
    });

    return (
        <div className="input floor-input">
            <label htmlFor="floor">קומה</label>
            <div className="floor-dropdown">
                <div ref={minFloorInputRef}>
                    <Dropdown
                        title={searchData.floor.min || "מ-"}
                        isOpen={isMinRoomsOpen}
                        onClickToggleIsOpen={onClickToggleIsMinRoomsOpen}
                    >
                        <ul>
                            {generateFloorList().map((listItem, i) => (
                                <li key={i} onClick={onClickSelectMinFloor}>
                                    {listItem}
                                </li>
                            ))}
                        </ul>
                    </Dropdown>
                </div>
                <div ref={maxFloorInputRef}>
                    <Dropdown
                        title={searchData.floor.max || "עד-"}
                        isOpen={isMaxRoomsOpen}
                        onClickToggleIsOpen={onClickToggleIsMaxRoomsOpen}
                    >
                        <ul>
                            {generateFloorList()
                                .filter(
                                    (listItem) =>
                                        listItem !== "מרתף/פרטר" &&
                                        listItem > searchData.floor.min
                                )
                                .map((listItem, i) => (
                                    <li key={i} onClick={onClickSelectMaxFloor}>
                                        {listItem}
                                    </li>
                                ))}
                        </ul>
                    </Dropdown>
                </div>
            </div>
            {console.log(searchData)}
        </div>
    );
};

export default FloorInput;
