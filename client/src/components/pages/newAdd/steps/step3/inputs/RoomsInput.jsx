import React, { useContext } from "react";
import { setRoomsAction } from "../../../../../../actions/newAddActions";
import { NewAddContext } from "../../../../../../context/NewAddContext";

const RoomsInput = () => {
    const { newAddData, dispatchNewAddData } = useContext(NewAddContext);

    const generateRoomsList = () => {
        const roomsList = [];
        let num = 0;
        while (num <= 12) {
            if (num === 0.5) num = 1;
            roomsList.push(num);
            num += 0.5;
        }
        return roomsList;
    };

    const onChangeSelectRooms = (event) => {
        dispatchNewAddData(setRoomsAction(event.target.value));
    };

    return (
        <div>
            <label htmlFor="rooms">מספר חדרים*</label>
            <select onChange={onChangeSelectRooms} id="rooms">
                <option hidden="hidden">בחירת מספר חדרים</option>
                {generateRoomsList().map((room) => (
                    <option key={room}>{room}</option>
                ))}
            </select>
        </div>
    );
};

export default RoomsInput;
