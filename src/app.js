const express = require("express");
const cors = require("cors"); 
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const shipmentRoutes = require("./routes/shipmentRoutes");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use("/api", shipmentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
