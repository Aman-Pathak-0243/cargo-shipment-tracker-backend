# Cargo Shipment Tracker Backend

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env` file in the root directory and add your MongoDB connection string and port:
   ```
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```
4. Start the server: `npm start`

## API Endpoints

- `GET /api/shipments` - Retrieve all shipments
- `GET /api/shipment/:id` - Retrieve a specific shipment by ID
- `POST /api/shipment` - Create a new shipment
- `POST /api/shipment/:id/update-location` - Update the current location of a shipment
- `GET /api/shipment/:id/eta` - Retrieve the estimated time of arrival (ETA) of a shipment
