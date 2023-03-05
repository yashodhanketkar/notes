const mongoose = require("mongoose");

const NotesSchema = new mongoose.Schema({
  noteTitle: String,
  noteText: String,
  createdBy: String,
  createdAt: String,
});

const NoteModel = mongoose.model("notes", NotesSchema);
module.exports = NoteModel;
