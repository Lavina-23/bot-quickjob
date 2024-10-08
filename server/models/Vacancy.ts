import mongoose from "mongoose";

const vacancySchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  job_title: {
    required: true,
    type: String,
  },
  sallary: {
    required: true,
    type: Number,
  },
});

export default mongoose.model("Vacancy", vacancySchema);
