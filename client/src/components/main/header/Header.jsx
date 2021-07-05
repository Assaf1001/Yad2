import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { ConnectionContext } from "../../../context/ConnectionContext";
import Category from "./Category";
import Modal from "../../login/Modal";

import headerData from "./headerData";
import logo from "../../../images/yad2Logo.png";
import icons from "../../../icons/icons";
import { GlobalContext } from "../../../context/GlobalContext";

const Header = () => {
    const history = useHistory();

    const { headerClassName } = useContext(GlobalContext);
    const { isModalOpen, onClickToggleModal } = useContext(ConnectionContext);

    return (
        <div className={headerClassName}>
            {isModalOpen && <Modal />}
            <div className={"nav-container"}>
                <img
                    onClick={() => history.push("/home")}
                    src={logo}
                    alt="logo"
                />
                <nav>
                    {headerData.map((category, i) => (
                        <Category key={i} dataList={category} />
                    ))}
                </nav>
            </div>
            <div className="icons-container">
                <div>
                    {icons.bell} <p>התראות</p>
                </div>
                <div>
                    {icons.heart} <p>מודעות שאהבתי</p>
                </div>
                <div onClick={onClickToggleModal}>
                    {icons.user} <p>התחברות</p>
                </div>
                <Link to="/newMessage" className="new-message">
                    <p>+ פרסום מודעה חדשה</p>
                </Link>
            </div>
        </div>
    );
};

export default Header;
