import kindInputData from "../components/pages/forSale/search/data/kindInputData";

export const initialSearchState = {
    address: null,
    kind: { apartments: [], houses: [], other: [] },
    rooms: { min: null, max: null },
    price: { min: null, max: null },
    properties: [],
    floor: { min: null, max: null },
    size: { min: null, max: null },
    date: null,
    freeText: null,
};

const searchReducer = (state, action) => {
    switch (action.type) {
        case "SET_ADDRESS":
            return { ...state, address: action.address };
        case "SET_KIND":
            const newKindArr = [...state.kind[action.key]];
            if (newKindArr.includes(action.item))
                newKindArr.splice(newKindArr.indexOf(action.item), 1);
            else newKindArr.push(action.item);

            return {
                ...state,
                kind: { ...state.kind, [action.key]: newKindArr },
            };

        case "SET_KIND_CATEGORY":
            let newKindCategoryArr = [...state.kind[action.key]];
            if (newKindCategoryArr.length === action.itemList.length)
                newKindCategoryArr = [];
            else newKindCategoryArr = action.itemList;

            return {
                ...state,
                kind: { ...state.kind, [action.key]: newKindCategoryArr },
            };
        case "SET_KIND_ALL":
            const allArr = kindInputData.data[1].list.concat(
                kindInputData.data[2].list,
                kindInputData.data[3].list
            );

            if (
                state.kind.apartments.length +
                    state.kind.houses.length +
                    state.kind.other.length ===
                allArr.length
            )
                return { ...state, kind: initialSearchState.kind };
            else
                return {
                    ...state,
                    kind: {
                        apartments: kindInputData.data[1].list,
                        houses: kindInputData.data[2].list,
                        other: kindInputData.data[3].list,
                    },
                };
        case "SET_MIN_ROOMS":
            return {
                ...state,
                rooms: { min: action.min, max: state.rooms.max },
            };
        case "SET_MAX_ROOMS":
            return {
                ...state,
                rooms: { min: state.rooms.min, max: action.max },
            };
        case "SET_MIN_PRICE":
            return {
                ...state,
                price: { min: action.min, max: state.price.max },
            };
        case "SET_MAX_PRICE":
            return {
                ...state,
                price: { min: state.price.min, max: action.max },
            };
        case "SET_PROPERTY":
            const newPropertiesArr = [...state.properties];

            if (newPropertiesArr.includes(action.property))
                newPropertiesArr.splice(
                    newPropertiesArr.indexOf(action.property),
                    1
                );
            else newPropertiesArr.push(action.property);

            return { ...state, properties: newPropertiesArr };

        case "SET_MIN_FLOOR":
            return {
                ...state,
                floor: { min: action.min, max: state.floor.max },
            };
        case "SET_MAX_FLOOR":
            return {
                ...state,
                floor: { min: state.floor.min, max: action.max },
            };
        case "SET_MIN_SIZE":
            return {
                ...state,
                size: { min: action.min, max: state.size.max },
            };
        case "SET_MAX_SIZE":
            return {
                ...state,
                size: { min: state.size.min, max: action.max },
            };
        case "SET_DATE":
            return { ...state, date: action.date };
        case "SET_FREE_TEXT":
            return { ...state, freeText: action.text };
        case "INIT_SEARCH":
            return { ...initialSearchState };
        default:
            return state;
    }
};

export default searchReducer;
