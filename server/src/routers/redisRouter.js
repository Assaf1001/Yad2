const express = require("express");
const redisClient = require("../db/redis");

const router = new express.Router();
const citiesArray = require("../data/citiesArray.json");

router.get("/set-cities", async (req, res) => {
    try {
        res.send();
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;
