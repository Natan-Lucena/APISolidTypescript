import express from "express";

const app = express();

app.get("/", (request, response) => {
    return response.json({ message: "Ola mundo" });
});

app.listen(3333, () => console.log("Server is Running on port 3333!"));
