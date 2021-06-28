import React from "react";
import Category from "./Category";
import footerData from "./footerData";
import SocialMediaIcon from "./SocialMediaIcon";

import { socialMediaIcons } from "../../../icons/icons";

const Footer = () => {
    return (
        <div className="footer">
            <p>
                מחפשים דירות למכירה ? בלוח נכסים למכירה של יד2 תמצאו בקלות
                ובמהירות. מאגר הנכסים למכירה הענק והעדכני שלנו עומד לרשותכם - כל
                שעליכם לעשות הוא להקליד את פרטי הנכס שמעניין אתכם (מחוז, אזור,
                ישוב, סוג נכס, מספר חדרים וכו') ומנוע החיפוש שלנו יסנן עבורכם את
                המודעות הרלוונטיות ביותר. מחפשים דירה למכירה באזור ספציפי? לחצו
                על "הצג על גבי מפה" ובחרו באזור הגיאוגרפי שבו אתם מעוניינים
                למצוא דירה למכירה. המערכת תסמן עבורכם את מיקומי הדירות הזמינות,
                ותוכלו להקליק על כל סימון כדי לצפות במודעה ובפרטי ההתקשרות עם
                המוכר.
            </p>
            <div className="footer-nav">
                {footerData.map((category, i) => (
                    <Category key={i} dataList={category} />
                ))}
            </div>
            <div className="social-media">
                {socialMediaIcons.map((icon, i) => (
                    <SocialMediaIcon key={i} icon={icon} />
                ))}
            </div>
            <p className="copyright">
                כל הזכויות שמורות לחברת קורל תל מפעילות לוח יד2 - לוח מודעות:
                דרושים IL, דירות להשכרה, בתים למכירה, בתים להשכרה, העברת בתים,
                הובלות אין לעשות שימוש בכל התכנים המופיעים בלוח יד2.
            </p>
            <hr />
            <div className="internal-links">
                <h6>תקנון</h6>
                <h6>הצהרת נגישות</h6>
                <h6>מדיניות פרטיות</h6>
                <h6>מפת האתר</h6>
                <h6>צור קשר</h6>
            </div>
        </div>
    );
};

export default Footer;
