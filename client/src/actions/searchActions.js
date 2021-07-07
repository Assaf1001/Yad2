export const setKindAction = (key, item) => ({
    type: "SET_KIND",
    key,
    item,
});

export const setKindCategoryAction = (key, itemList) => ({
    type: "SET_KIND_CATEGORY",
    key,
    itemList,
});

export const setKindAllAction = () => ({
    type: "SET_KIND_ALL",
});
