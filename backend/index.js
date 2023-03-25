import express from "express";
import { promises as fs, readFile } from "fs";

const app = express();

app.get("/foo/bar", async (request, response) => {
  try {
    const data = await fs.readFile("./home.html", "utf-8");
    response.send(data);
  } catch (error) {
    console.error(error);
    response.status(500).send("Error reading file");
  }
});

app.get("*", (request, response) => {
  response.send("Page not found");
});

app.listen(process.env.Port || 8080, () =>
  console.log("app available on http://localhost:8080/foo/bar")
);
