export const setCityOrStreet = (cityOrStreet) => ({
    type: "SET_CITY_OR_STREET",
    cityOrStreet,
});

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

export const setMinRoomsAction = (min) => ({
    type: "SET_MIN_ROOMS",
    min,
});

export const setMaxRoomsAction = (max) => ({
    type: "SET_MAX_ROOMS",
    max,
});

export const setMinPriceAction = (min) => ({
    type: "SET_MIN_PRICE",
    min,
});

export const setMaxPriceAction = (max) => ({
    type: "SET_MAX_PRICE",
    max,
});
