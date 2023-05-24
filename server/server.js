import express from "express";
import cors from "cors";
import client from "./Database/db.js";

client.connect();

const app = express();

//middleware
app.use(cors());
app.use(express.json());

const PORT = 8000;

app.get("/", async (req, res) => {
  const userEmail = "bz@gmail.com";

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

//register
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const register = await client.query(
      `INSERT INTO "user"(name, user_email, hashed_password) VALUES ($1, $2, $3)`,
      [name, email, password]
    );
    res.json({ register });
  } catch (error) {
    console.log(error);
  }

  console.log(name, email, password);
});

app.listen(PORT, () => {
  console.log(`server is listening to the port ${PORT}`);
});
