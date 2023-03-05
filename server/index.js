const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const config = require("dotenv");

config.config({ path: "./config.env" });

const NoteModel = require("./models/notes");

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongoose connected"))
  .catch((err) => console.error(err));

app.get("/api/v1/notes", async (req, res) => {
  const notes = await NoteModel.find({});
  console.log(notes);
  res.send(notes);
});

app.listen(8000, () => {
  console.log("SERVER RUNS PERFECTLY!");
});
