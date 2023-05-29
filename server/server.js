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
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = 8000;

/* app.get("/", async (req, res) => {
  res.json({ message: "helllo server!" });
}); */

//register
app.post("/register", async (req, res) => {
  const { name, password, email } = req.body;
  /* const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  
  try {
    const user = await client.query(
      `SELECT * FROM "user" WHERE user_email = $1`,
      [email]
    );
    if (user.rows.length !== 0) {
      res.status(401).json("email has been already in use");
    } else {
      const register = await client.query(
        `INSERT INTO "user"(user_name, user_email, user_password) VALUES ($1, $2, $3)`,
        [name, email, hashedPassword]
      );

      const token = jwt.sign({ email }, "secret", { expiresIn: "30d" });

      res.json({ email, token });
    }
  } catch (error) {
    res.status(500).json({ message: "something went wrong" });
  } */
  res.json({ name });
  console.log(name, email, password);
});

app.listen(PORT, () => {
  console.log(`server is listening to the port ${PORT}`);
});
