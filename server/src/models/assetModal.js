const mongoose = require("mongoose");

const assetSchema = new mongoose.Schema({
    address: {
        type: { type: String, required: true },
        condition: { type: String, required: true },
        city: { type: String, required: true },
        street: { type: String, required: true },
        number: { type: Number, required: true },
        floor: { type: Number, required: true },
        buildingFloors: { type: Number, required: true },
        onPoles: { type: Boolean },
    },
    props: {
        rooms: { type: Number, required: true },
        parking: { type: Number, required: true },
        balcony: { type: Number, required: true },
        properties: { type: Array },
        description: { type: String, required: true },
    },
    more: {
        size: { type: Number, required: true },
        totalSize: { type: Number, required: true },
        pirce: { type: Number, required: true }, ////100000 min
        entranceDate: { type: String },
        entranceNow: { type: Boolean },
    },
    media: {
        video: { type: String },
        video: { type: String },
    },
    contact: {
        name: { type: String, required: true },
        phoneNumber: { type: Number, required: true },
        email: { type: String, required: true },
    },
});

const Asset = mongoose.model("Asset", assetSchema);

module.exports = Asset;
