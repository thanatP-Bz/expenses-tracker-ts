import express from "express";
import cors from "cors";
import client from "./Database/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import bodyParser from "body-parser";
import { StatusCodes } from "http-status-codes";
import dotenv from "dotenv";
dotenv.config();

client.connect();

const app = express();

//middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = 8000 || process.env.PORT;

app.get("/", async (req, res) => {
  res.json({ message: "helllo server!" });
});

//register
app.post("/register", async (req, res) => {
  const { userName, password, email } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    const user = await client.query(
      `SELECT * FROM "user" WHERE user_email = $1`,
      [email]
    );
    if (user.rows.length !== 0) {
      res.status(StatusCodes.BAD_REQUEST).json("email has been already in use");
    } else {
      const register = await client.query(
        `INSERT INTO "user"(user_name, user_email, user_password) VALUES ($1, $2, $3)`,
        [userName, email, hashedPassword]
      );
      const token = jwt.sign({ email }, "secret", { expiresIn: "30d" });
      res.status(StatusCodes.CREATED).json({ userName, token });
    }
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json("something went wrong");
    console.log(error);
  }
});

//login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await client.query(
      `SELECT * FROM "user" WHERE user_email = $1`,
      [email]
    );

    if (!user.rows.length)
      return res.status(StatusCodes.BAD_REQUEST).json("User does not exist!");

    const success = await bcrypt.compare(password, user.rows[0].user_password);

    const token = jwt.sign({ email }, "secret", { expiresIn: "30d" });

    if (success) {
      res.status(StatusCodes.OK).json({
        userName: user.rows[0].user_name,
        email: user.rows[0].user_email,
        token,
      });
    } else {
      res
        .status(StatusCodes.UNAUTHORIZED)
        .json("password does not match please try again");
    }
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json("something went wrong please try again");
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`server is listening to the port ${PORT}`);
});
