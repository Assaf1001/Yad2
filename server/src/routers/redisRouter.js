const express = require("express");
const axios = require("axios");
const redisClient = require("../db/redis");

const router = new express.Router();
const citiesArray = require("../data/citiesArray.json");

router.get("/ttt", async (req, res) => {
    try {
        const result = await axios.get(
            "https://data.gov.il/api/3/action/datastore_search?resource_id=9ad3862c-8391-4b2f-84a4-2d4c68625f4b"
        );

        res.send(result.data);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;
