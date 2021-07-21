export const initialNewAddState = {
    kind: null,
    condition: null,
    city: null,
};

const newAddReducer = (state, action) => {
    switch (action.type) {
        case "SET_KIND":
            return { ...state, kind: action.kind };
        case "SET_CONDITION":
            return { ...state, condition: action.condition };
        case "SET_CITY":
            return { ...state, city: action.city };
        default:
            return state;
    }
};

export default newAddReducer;
