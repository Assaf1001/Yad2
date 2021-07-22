import axios from "axios";

const addressesAPIurl = "https://data.gov.il/api/3/action/datastore_search";

export const searchAutoComplete = async (value) => {
    try {
        const res = await axios.get(addressesAPIurl, {
            params: {
                resource_id: "9ad3862c-8391-4b2f-84a4-2d4c68625f4b",
                q: value,
                limit: 10,
            },
        });

        const records = res.data.result.records;
        const resultArray = [];
        for (let record of records) {
            resultArray.push({ city: record.שם_ישוב, address: record.שם_רחוב });
        }

        return resultArray;
    } catch (err) {
        throw new Error(err.response.data.message);
    }
};

export const getCity = async (value) => {
    try {
        const res = await axios.get(addressesAPIurl, {
            params: {
                resource_id: "9ad3862c-8391-4b2f-84a4-2d4c68625f4b",
                q: value,
                limit: 100,
            },
        });

        const records = res.data.result.records;
        const citiesArray = [];
        for (let record of records) {
            if (record.שם_רחוב + " " === record.שם_ישוב) {
                citiesArray.push(record.שם_ישוב);
            }
        }

        return citiesArray;
    } catch (err) {
        throw new Error(err.response.data.message);
    }
};

export const getStreet = async (value) => {
    try {
        const res = await axios.get(addressesAPIurl, {
            params: {
                resource_id: "9ad3862c-8391-4b2f-84a4-2d4c68625f4b",
                q: value,
                limit: 100,
            },
        });

        const records = res.data.result.records;
        const streetsArray = [];
        for (let record of records) {
            if (record.שם_רחוב + " " !== record.שם_ישוב) {
                streetsArray.push(record.שם_רחוב);
            }
        }

        return streetsArray;
    } catch (err) {
        throw new Error(err.response.data.message);
    }
};
