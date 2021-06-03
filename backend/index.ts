import "dotenv/config";
import express from "express";

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => res.send("Well done!!"));

app.listen(port, () => console.log(`Listening on http://localhost:${port}!`));
