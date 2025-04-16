const express = require("express");
const app = express();

function generateRandomEarthquake(id) {
  const locations = [
    { epicenter: "Near Delhi", lat: 28.7041, long: 77.1025 },
    { epicenter: "Mumbai", lat: 19.0760, long: 72.8777 },
    { epicenter: "Chennai", lat: 13.0827, long: 80.2707 },
    { epicenter: "Shimla", lat: 31.1048, long: 77.1734 },
    { epicenter: "Kolkata", lat: 22.5726, long: 88.3639 }
  ];

  const loc = locations[Math.floor(Math.random() * locations.length)];

  return {
    id,
    magnitude: parseFloat((Math.random() * 4 + 3).toFixed(1)),  // 3.0 to 7.0
    depth: parseFloat((Math.random() * 50 + 5).toFixed(1)),    // 5 to 55 km
    latitude: loc.lat + (Math.random() - 0.5) * 0.2,
    longitude: loc.long + (Math.random() - 0.5) * 0.2,
    epicenter: loc.epicenter,
    time: new Date().toISOString()
  };
}

app.get("/earthquakes", (req, res) => {
  const quakes = Array.from({ length: 5 }, (_, i) => generateRandomEarthquake(i + 1));
  res.json(quakes);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🌐 Server running on port ${PORT}`));
