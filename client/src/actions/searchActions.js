export const setAddressAction = (address) => ({
    type: "SET_ADDRESS",
    address,
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

export const setPorpertyAction = (property) => ({
    type: "SET_PROPERTY",
    property,
});

export const setMinFloorAction = (min) => ({ type: "SET_MIN_FLOOR", min });

export const setMaxFloorAction = (max) => ({ type: "SET_MAX_FLOOR", max });

export const setMinSizeAction = (min) => ({ type: "SET_MIN_SIZE", min });

export const setMaxSizeAction = (max) => ({ type: "SET_MAX_SIZE", max });

export const setDateAction = (date) => ({ type: "SET_DATE", date });

export const setFreeTextAction = (text) => ({ type: "SET_FREE_TEXT", text });

export const initSearchAction = () => ({ type: "INIT_SEARCH" });
