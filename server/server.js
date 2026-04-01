const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Booking = require("./models/Booking");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.post("/api/book", async (req, res) => {
  const booking = new Booking(req.body);
  await booking.save();
  res.send("Saved");
});

app.get("/api/bookings", async (req, res) => {
  const data = await Booking.find();
  res.json(data);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on " + PORT));
