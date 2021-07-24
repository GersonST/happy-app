import express from "express";

import "./database/connection";

const app = express();

app.use(express.json());

app.post("/orphanages", (request, response) => {
  const {
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends,
  } = request.body;

  return response.json({ message: "Hello World" });
});

app.listen(3333);
