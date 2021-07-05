import React from "react";

import icons from "../../../icons/icons";
import yad1Logo from "../../../images/yad1_logo.svg";
import yadata from "../../../images/yadata_logo_black.svg";

const PageHeader = () => {
    return (
        <nav className="page-header">
            <div className="nav-container">
                <div className="right-nav">
                    <div className="page-nav__selected">
                        <p>מכירה</p>
                    </div>
                    <div>
                        <p>השכרה</p>
                    </div>
                    <div>
                        <p>דירות שותפים</p>
                    </div>
                    <div>
                        <p>נדל״ן מסחרי</p>
                    </div>
                </div>
                <div className="left-nav">
                    <div>
                        {icons.hammer}
                        <p>כונס נכסים</p>
                    </div>
                    <div>
                        {icons.chart}
                        <p>מדד הנדל״ן</p>
                    </div>
                    <div>
                        <img src={yad1Logo} alt="yad1logo" />
                        <p>יד1 דירות חדשות</p>
                    </div>
                    <div>
                        <img src={yadata} alt="yadata" />
                        <p>הערכת שווי הנכס</p>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default PageHeader;
