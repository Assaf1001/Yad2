const express = require("express");
const cors = require("cors");
const userRouter = require("./routers/userRouter");
const assetRouter = require("./routers/assetRouter");
const redisRouter = require("./routers/redisRouter");
require("./db/mongoose");

const port = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors());
app.use(userRouter);
app.use(assetRouter);
app.use(redisRouter);

app.get("/", (req, res) => {
    res.send("OK");
});

app.listen(port, () => console.log("Server is connected, Port:", port));
