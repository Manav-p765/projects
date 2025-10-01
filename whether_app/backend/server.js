if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}
const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/weather", async (req, res) => {
  const city = req.query.city || "japan";
  const date1 = req.query.date1;
  const date2 = req.query.date2;
  const include = req.query.include || "current"; // Default to current
  const elements = req.query.elements; // Optional, can be undefined
  const contentType = req.query.contentType || "json"; // Default to json
  const lang = req.query.lang || "en"; // Default to English

  if (!city) {
    return res.status(400).send("City is required");
  }

  try {
    let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(
      city
    )}`;

    if (date1) {
      if (date1 && date2) url += `/${date1}/${date2}`;
      else if (date1) url += `/${date1}`;
    }

    // Build query parameters object
    const params = {
      key: process.env.WEATHER_API_KEY,
      unitGroup: "metric",
      include: include || "current",
      elements: elements || undefined,
      contentType: contentType || "json",
      lang: lang || "en",
    };

    const response = await axios.get(url, { params });
    res.json(response.data);
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: "API request failed" });
  }
});

app.listen("8080", () => {
  console.log("server is listening on port 8080");
});
