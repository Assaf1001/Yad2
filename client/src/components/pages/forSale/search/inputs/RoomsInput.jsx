import React, { createRef, useContext, useState } from "react";
import {
    setMaxRoomsAction,
    setMinRoomsAction,
} from "../../../../../actions/searchActions";
import { SearchContext } from "../../../../../context/SearchContext";
import useOnClickOutsideClose from "../../../../../hooks/useOnClickOutsiteClose";
import Dropdown from "../Dropdown";

const RoomsInput = () => {
    const roomsInputRef = createRef();

    const { searchData, dispatchSearchData } = useContext(SearchContext);

    const [isOpen, setIsOpen] = useState(false);
    const [isMinRoomsOpen, setIsMinRoomsOpen] = useState(false);
    const [isMaxRoomsOpen, setIsMaxRoomsOpen] = useState(false);

    const onClickToggleIsOpen = () => {
        if (isOpen) setIsOpen(false);
        else setIsOpen(true);
    };

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

    const onClickSelectMinRooms = (event) => {
        dispatchSearchData(setMinRoomsAction(event.target.innerHTML));
        setIsMinRoomsOpen(false);
    };

    const onClickSelectMaxRooms = (event) => {
        dispatchSearchData(setMaxRoomsAction(event.target.innerHTML));
        setIsMaxRoomsOpen(false);
    };

    const generateRoomsList = () => {
        const roomsList = [];
        roomsList[0] = "הכל";
        let num = 1;
        while (num <= 12) {
            roomsList.push(num);
            num += 0.5;
        }
        return roomsList;
    };

    useOnClickOutsideClose(roomsInputRef, () => {
        setIsOpen(false);
    });

    return (
        <div className="input rooms-input" ref={roomsInputRef}>
            <label htmlFor="rooms">חדרים</label>
            <Dropdown
                title="חדרים"
                isOpen={isOpen}
                onClickToggleIsOpen={onClickToggleIsOpen}
            >
                <div className="rooms-dropdown">
                    <Dropdown
                        title={searchData.rooms.min || "מ-"}
                        isOpen={isMinRoomsOpen}
                        onClickToggleIsOpen={onClickToggleIsMinRoomsOpen}
                    >
                        <ul>
                            {generateRoomsList().map((listItem, i) => (
                                <li key={i} onClick={onClickSelectMinRooms}>
                                    {listItem}
                                </li>
                            ))}
                        </ul>
                    </Dropdown>
                    <Dropdown
                        title={searchData.rooms.max || "עד-"}
                        isOpen={isMaxRoomsOpen}
                        onClickToggleIsOpen={onClickToggleIsMaxRoomsOpen}
                    >
                        <ul>
                            {generateRoomsList()
                                .filter(
                                    (listItem) =>
                                        listItem >= searchData.rooms.min
                                )
                                .map((listItem, i) => (
                                    <li key={i} onClick={onClickSelectMaxRooms}>
                                        {listItem}
                                    </li>
                                ))}
                        </ul>
                    </Dropdown>
                </div>
            </Dropdown>
        </div>
    );
};

export default RoomsInput;
