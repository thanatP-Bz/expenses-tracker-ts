import express from "express";
const app = express();

const PORT = 8000;

app.get("/", (req, res) => {
  res.json({ msg: "hello server" });
});

app.listen(PORT, () => {
  console.log(`server is listening to the port ${PORT}`);
});
