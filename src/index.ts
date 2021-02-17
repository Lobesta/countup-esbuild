import express from "express";
import ssr from "./view/ssr";
const app = express();

app.get("/", (_req, res)=>{
    res.send(ssr());
});

app.listen(3000);
console.log("Server is listening on port 3000");
