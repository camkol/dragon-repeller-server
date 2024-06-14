import express from "express";
import fs from "fs";

const app = express();

app.use(express.static("public"));

app.get("/selection", (req, res) => {
  const selectionFile = fs.readFileSync("database.json", "utf-8");
  const selection = JSON.parse(selectionFile);

  res.json(selection);
});

app.listen(3000, () => {
  console.log("app is running on 3000");
});
