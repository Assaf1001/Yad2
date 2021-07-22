import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCheck,
    faGavel,
    faChartLine,
    faHome,
    faCalculator,
    faCar,
    faGift,
    faBell,
    faHeart,
    faUser,
    faTimes,
    faEye,
    faEyeSlash,
    faSearch,
    faPlus,
    faAngleDown,
    faAngleUp,
    faChild,
    faSnowflake,
    faCube,
    faArchive,
    faDoorClosed,
    faChair,
    faWheelchair,
    faClipboardList,
    faPaintRoller,
    faFaucet,
    faSolarPanel,
    faBorderAll,
} from "@fortawesome/free-solid-svg-icons";

import apple from "./socialMediaIcons/apple.png";
import facebook from "./socialMediaIcons/facebook.png";
import googlePlay from "./socialMediaIcons/google-play.png";
import youtube from "./socialMediaIcons/youtube.png";

const icons = {
    check: <FontAwesomeIcon icon={faCheck} />,
    hammer: <FontAwesomeIcon icon={faGavel} />,
    chart: <FontAwesomeIcon icon={faChartLine} />,
    home: <FontAwesomeIcon icon={faHome} />,
    calculator: <FontAwesomeIcon icon={faCalculator} />,
    car: <FontAwesomeIcon icon={faCar} />,
    gift: <FontAwesomeIcon icon={faGift} />,
    bell: <FontAwesomeIcon icon={faBell} />,
    heart: <FontAwesomeIcon icon={faHeart} />,
    user: <FontAwesomeIcon icon={faUser} />,
    close: <FontAwesomeIcon icon={faTimes} />,
    visable: <FontAwesomeIcon icon={faEye} />,
    notVisable: <FontAwesomeIcon icon={faEyeSlash} />,
    search: <FontAwesomeIcon icon={faSearch} />,
    plus: <FontAwesomeIcon icon={faPlus} />,
    arrowDown: <FontAwesomeIcon icon={faAngleDown} />,
    arrowUp: <FontAwesomeIcon icon={faAngleUp} />,
    human: <FontAwesomeIcon icon={faChild} />,
    snow: <FontAwesomeIcon icon={faSnowflake} />,
    cube: <FontAwesomeIcon icon={faCube} />,
    box: <FontAwesomeIcon icon={faArchive} />,
    door: <FontAwesomeIcon icon={faDoorClosed} />,
    chair: <FontAwesomeIcon icon={faChair} />,
    wheelChair: <FontAwesomeIcon icon={faWheelchair} />,
    lift: <FontAwesomeIcon icon={faClipboardList} />,
    brush: <FontAwesomeIcon icon={faPaintRoller} />,
    faucet: <FontAwesomeIcon icon={faFaucet} />,
    solarPanel: <FontAwesomeIcon icon={faSolarPanel} />,
    grid: <FontAwesomeIcon icon={faBorderAll} />,
};

export const socialMediaIcons = [apple, facebook, googlePlay, youtube];

export default icons;
