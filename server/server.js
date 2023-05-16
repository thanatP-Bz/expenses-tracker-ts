import express from "express";
import client from "./Database/db.js";

client.connect();

const app = express();

const PORT = 8000;

app.get("/", async (req, res) => {
  try {
    const response = await client.query("SELECT * FROM users");
    res.json(response.rows);
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`server is listening to the port ${PORT}`);
});
