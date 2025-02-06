const express = require("express");
const router = express.Router();
const shipmentController = require("../controllers/shipmentController");

router.get("/shipments", shipmentController.getAllShipments);
router.get("/shipment/:id", shipmentController.getShipmentById);
router.post("/shipment", shipmentController.createShipment);
router.post(
  "/shipment/:id/update-location",
  shipmentController.updateShipmentLocation
);
router.get("/shipment/:id/eta", shipmentController.getShipmentETA);

module.exports = router;
