import React, { useContext } from "react";
import { ConnectionContext } from "../../context/ConnectionContext";
import Notification from "./Notification";
import Welcome from "./Welcome";
import Form from "./Form";

import icons from "../../icons/icons";

const Modal = () => {
    const { errorMessage, onClickToggleModal } = useContext(ConnectionContext);

    return (
        <div>
            <div onClick={onClickToggleModal} className="blur-backgroud"></div>
            {errorMessage && <Notification />}
            <div className="login-modal">
                <div className="close-button" onClick={onClickToggleModal}>
                    {icons.close}
                </div>
                <Welcome />
                <Form />
            </div>
        </div>
    );
};

export default Modal;
