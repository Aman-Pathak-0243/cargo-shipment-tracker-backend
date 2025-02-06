const mongoose = require("mongoose");

const shipmentSchema = new mongoose.Schema({
  containerId: { type: String, required: true, unique: true },
  route: { type: [String], required: true },
  currentLocation: { type: String, required: true },
  currentETA: { type: Date, required: true },
  status: { type: String, required: true },
});

const Shipment = mongoose.model("Shipment", shipmentSchema);

module.exports = Shipment;
