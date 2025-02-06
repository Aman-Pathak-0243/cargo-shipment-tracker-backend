const Shipment = require("../models/shipmentModel");

exports.getAllShipments = async (req, res) => {
  try {
    const shipments = await Shipment.find();
    res.json(shipments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getShipmentById = async (req, res) => {
  try {
    const shipment = await Shipment.findById(req.params.id);
    if (!shipment)
      return res.status(404).json({ message: "Shipment not found" });
    res.json(shipment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createShipment = async (req, res) => {
  const { containerId, route, currentLocation, currentETA, status } = req.body;
  const newShipment = new Shipment({
    containerId,
    route,
    currentLocation,
    currentETA,
    status,
  });
  try {
    const savedShipment = await newShipment.save();
    res.status(201).json(savedShipment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateShipmentLocation = async (req, res) => {
  try {
    const shipment = await Shipment.findById(req.params.id);
    if (!shipment)
      return res.status(404).json({ message: "Shipment not found" });
    shipment.currentLocation = req.body.currentLocation;
    const updatedShipment = await shipment.save();
    res.json(updatedShipment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getShipmentETA = async (req, res) => {
  try {
    const shipment = await Shipment.findById(req.params.id);
    if (!shipment)
      return res.status(404).json({ message: "Shipment not found" });
    res.json({ currentETA: shipment.currentETA });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
