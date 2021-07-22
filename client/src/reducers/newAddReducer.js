export const initialNewAddState = {
    kind: null,
    condition: null,
    city: null,
    street: null,
    houseNumber: null,
    floor: null,
    totalFloors: null,
    rooms: null,
    parking: null,
    balcony: null,
    properties: [],
    description: null,
    size: null,
    totalSize: null,
    price: null,
    date: null,
};

const newAddReducer = (state, action) => {
    switch (action.type) {
        case "SET_KIND":
            return { ...state, kind: action.kind };
        case "SET_CONDITION":
            return { ...state, condition: action.condition };
        case "SET_CITY":
            return { ...state, city: action.city };
        case "SET_STREET":
            return { ...state, street: action.street };
        case "SET_HOUSE_NUMBER":
            return { ...state, houseNumber: action.houseNumber };
        case "SET_FLOOR":
            return { ...state, floor: action.floor };
        case "SET_TOTAL_FLOORS":
            return { ...state, totalFloors: action.totalFloors };
        case "SET_ROOMS":
            return { ...state, rooms: action.rooms };
        case "SET_PARKING":
            return { ...state, parking: action.parking };
        case "SET_BALCONY":
            return { ...state, balcony: action.balcony };
        case "SET_PROPERTY":
            const newPropertiesArr = [...state.properties];

            if (newPropertiesArr.includes(action.property))
                newPropertiesArr.splice(
                    newPropertiesArr.indexOf(action.property),
                    1
                );
            else newPropertiesArr.push(action.property);

            return { ...state, properties: newPropertiesArr };
        case "SET_DESCRIPTION":
            return { ...state, description: action.description };
        case "SET_SIZE":
            return { ...state, size: action.size };
        case "SET_TOTAL_SIZE":
            return { ...state, totalSize: action.totalSize };
        case "SET_PRICE":
            return { ...state, price: action.price };
        case "SET_DATE":
            return { ...state, date: action.date };

        default:
            return state;
    }
};

export default newAddReducer;
