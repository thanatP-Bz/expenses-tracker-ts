import express from "express";
import cors from "cors";
import client from "./Database/db.js";

const app = express();

//middleware
app.use(cors());
app.use(express.json());

client.connect();

const PORT = 8000;

app.get("/", async (req, res) => {
  const userEmail = "bz12@gmail.com";

  try {
    const response = await client.query(
      "SELECT * FROM users WHERE email = $1",
      [userEmail]
    );
    res.json(response.rows);
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`server is listening to the port ${PORT}`);
});
