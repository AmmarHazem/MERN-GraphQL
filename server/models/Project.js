const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    required: true,
    enum: ["Not Started", "In Progress", "Completed"],
  },
  client: {
    type: mongoose.Types.ObjectId,
    ref: "Client",
    required: true,
  },
});

module.exports = mongoose.model("Project", ProjectSchema);
