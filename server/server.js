const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Booking = require("./models/Booking");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("YOUR_MONGO_URI")
  .then(() => console.log("MongoDB Connected"));

app.post("/api/book", async (req, res) => {
  const booking = new Booking(req.body);
  await booking.save();
  res.send("Saved");
});

app.get("/api/bookings", async (req, res) => {
  const data = await Booking.find();
  res.json(data);
});

app.listen(5000, () => console.log("Server running"));
