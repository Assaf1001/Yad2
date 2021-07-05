// import {
//     faUser,
//     faHome,
//     faSignInAlt,
//     faSignOutAlt,
//     faEnvelope,
//     faInfoCircle,
//     faSearch,
//     faFilter,
//     faChevronDown,
//     faChevronRight,
//     faHeart,
//     faShoppingCart,
//     faCheck,
//     faTruck,
//     faEye,
//     faShoppingBasket,
//     faPlus,
//     faCreditCard,
//     faTimes,
//     faRedoAlt,
//     faShieldAlt,
//     faQuestionCircle,
//     faMapMarkerAlt,
//     faBars,
//     faGavel,
// } from "@fortawesome/free-solid-svg-icons";
// import { faCcVisa, faPaypal } from "@fortawesome/free-brands-svg-icons";

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
};

export const socialMediaIcons = [apple, facebook, googlePlay, youtube];
// const icons = {
//     user: <FontAwesomeIcon icon={faUser} />,
//     home: <FontAwesomeIcon icon={faHome} />,
//     logIn: <FontAwesomeIcon icon={faSignInAlt} />,
//     logOut: <FontAwesomeIcon icon={faSignOutAlt} />,
//     contactUs: <FontAwesomeIcon icon={faEnvelope} />,
//     help: <FontAwesomeIcon icon={faInfoCircle} />,
//     search: <FontAwesomeIcon icon={faSearch} />,
//     fliter: <FontAwesomeIcon icon={faFilter} />,
//     downArrow: <FontAwesomeIcon icon={faChevronDown} />,
//     rightArrow: <FontAwesomeIcon icon={faChevronRight} />,
//     wishList: <FontAwesomeIcon icon={faHeart} />,
//     cart: <FontAwesomeIcon icon={faShoppingCart} />,
//     check: <FontAwesomeIcon icon={faCheck} />,
//     truck: <FontAwesomeIcon icon={faTruck} />,
//     view: <FontAwesomeIcon icon={faEye} />,
//     basket: <FontAwesomeIcon icon={faShoppingBasket} />,
//     plus: <FontAwesomeIcon icon={faPlus} />,
//     creditCard: <FontAwesomeIcon icon={faCreditCard} />,
//     visa: <FontAwesomeIcon icon={faCcVisa} />,
//     paypal: <FontAwesomeIcon icon={faPaypal} />,
//     delete: <FontAwesomeIcon icon={faTimes} />,
//     returns: <FontAwesomeIcon icon={faRedoAlt} />,
//     privacy: <FontAwesomeIcon icon={faShieldAlt} />,
//     faq: <FontAwesomeIcon icon={faQuestionCircle} />,
//     find: <FontAwesomeIcon icon={faMapMarkerAlt} />,
//     hamburger: <FontAwesomeIcon icon={faBars} />,
// };

export default icons;
