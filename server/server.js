import express from "express";
import cors from "cors";
import client from "./Database/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import bodyParser from "body-parser";

client.connect();

const app = express();

//middleware
app.use(cors());
app.use(bodyParser.json());

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
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    const user = await client.query(
      `SELECT * FROM "user" WHERE user_email = $1`,
      [email]
    );
    if (user.rows.length !== 0) {
      console.log(res.status(404).send("email has been already in use"));
    } else {
      const register = await client.query(
        `INSERT INTO "user"(user_name, user_email, user_password) VALUES ($1, $2, $3)`,
        [name, email, hashedPassword]
      );

      const token = jwt.sign({ email }, "secret", { expiresIn: "30d" });

      res.json({ email, token });
    }
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`server is listening to the port ${PORT}`);
});
