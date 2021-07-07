import kindInputData from "../components/pages/forSale/search/kindInputData";

export const initialSearchState = {
    kind: { apartments: [], houses: [], other: [] },
};

const searchReducer = (state, action) => {
    switch (action.type) {
        case "SET_KIND":
            const newKindArr = [...state.kind[action.key]];

            if (newKindArr.includes(action.item)) {
                newKindArr.splice(newKindArr.indexOf(action.item), 1);
            } else {
                newKindArr.push(action.item);
            }

            return {
                ...state,
                kind: { ...state.kind, [action.key]: newKindArr },
            };

        case "SET_KIND_CATEGORY":
            let newKindCategoryArr = [...state.kind[action.key]];

            if (newKindCategoryArr.length === action.itemList.length) {
                newKindCategoryArr = [];
            } else {
                newKindCategoryArr = action.itemList;
            }

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

        default:
            return state;
    }
};
// const searchReducer = (state, action) => {
//     switch (action.type) {
//         case "SET_KIND":
//             const newKindArr = [...state.kindArr];
//             if (newKindArr.includes(action.kind)) {
//                 newKindArr.splice(newKindArr.indexOf(action.kind), 1);
//             } else {
//                 newKindArr.push(action.kind);
//             }
//             return { ...state, kindArr: newKindArr };
//         default:
//             return state;
//     }
// };

export default searchReducer;
