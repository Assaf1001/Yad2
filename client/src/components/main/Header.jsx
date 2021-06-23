import React from "react";
import { useHistory } from "react-router-dom";
import logo from "../../images/yad2Logo.png";
import Modal from '../login/Modal'

const Header = () => {
    const history = useHistory();

    return (
        <div className="header">
            <Modal/>
            <div className="nav-container">
                <img
                    onClick={() => history.push("/home")}
                    src={logo}
                    alt="logo"
                />
                <nav>
                    <div>
                        <p>נדל״ן</p>
                        <ul>
                            <div className="right-row">
                                <li>דירות למכירה</li>
                                <li>דירות להשכרה</li>
                                <li>שותפים</li>
                                <li>מסחרי</li>
                                <li>חיפוש על גבי מפה</li>
                            </div>
                            <div>
                                <li>כונס נכסים</li>
                                <li>מדד הנדל״ן</li>
                                <li>יד1 דירות חדשות</li>
                                <li>הערכת שווי הנכס</li>
                                <li>משרדי תיווך בישראל</li>
                            </div>
                        </ul>
                    </div>
                    <div>
                        <p>רכב</p>
                        <ul>
                            <div className="right-row">
                                <li>פרטי</li>
                                <li>מסחרי</li>
                                <li>ג׳יפים</li>
                                <li>אופנועים</li>
                                <li>קטנועים</li>
                                <li>מיוחדים</li>
                                <li>אביזרים</li>
                                <li>משאיות</li>
                                <li>כלי שיט</li>
                            </div>
                            <div>
                                <li>קטלוג רכבים</li>
                                <li>קטלוג רכב</li>
                                <li>מכרזים וכינוס</li>
                                <li>מימון רכב</li>
                            </div>
                        </ul>
                    </div>
                    <div>
                        <p>יד שנייה</p>
                        <ul>
                            <div className="right-row">
                                <li>כל המוצרים </li>
                                <li>מוצרי חשמל </li>
                                <li>ריהוט </li>
                                <li>עסקים למכירה </li>
                                <li>ספורט </li>
                                <li>סלולרי </li>
                                <li>לתינוק ולילד </li>
                                <li>הכל בחינם! </li>
                            </div>
                            <div>
                                <li>קונסולות משחק</li>
                                <li>מחשבים וציוד נלווה</li>
                                <li>לגינה</li>
                                <li>אופנה וטיפוח</li>
                            </div>
                        </ul>
                    </div>
                    <div>
                        <p>דרושים IL</p>
                        <ul></ul>
                    </div>
                    <div>
                        <p>עסקים למכירה</p>
                        <ul></ul>
                    </div>
                    <div>
                        <p>חיות מחמד</p>
                        <ul></ul>
                    </div>
                    <div>
                        <p>בעלי מקצוע</p>
                        <ul></ul>
                    </div>
                    <div>
                        <p>עוד...</p>
                        <ul></ul>
                    </div>
                    <div></div>
                </nav>
            </div>
        </div>
    );
};

export default Header;
