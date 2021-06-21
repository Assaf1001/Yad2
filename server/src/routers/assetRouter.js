const express = require("express");
const mongoose = require("mongoose");
const Asset = require("../models/assetModal");

const router = new express.Router();

router.get("/test", (req, res) => {
    try {
        res.send("test ok");
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;
