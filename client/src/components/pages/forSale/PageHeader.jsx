import React from "react";

import icons from "../../../icons/icons";

const PageHeader = () => {
    return (
        <nav className="page-header">
            <div className="nav-container">
                <div className="right-nav">
                    <div>
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
                        {icons.home}
                        <p>יד1 דירות חדשות</p>
                    </div>
                    <div>
                        <p>
                            <span>yo</span>data הערכת שווי הנכס
                        </p>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default PageHeader;
