const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/auth");
const { getEvents, createEvent } = require("../controllers/events");
// const { getEvents, createEvent } = require("../controllers/eventsWithFs");
const Event = require("../models/event");
const validateEvent = require("../validators/eventValidator");

router.use((req, res, next) => {
  if (!authMiddleware(req)) {
    return res.status(403).json({ error: "Access Forbidden" });
  }
  next();
});

router.get("/event", async (httpReq, httpRes) => {
  const events = await getEvents();
  return httpRes.json(events);
});

router.post("/event", async (httpReq, httpRes) => {
  const requestBody = httpReq.body;
  const validationResponse = validateEvent(requestBody);
  if (!validationResponse.isValid) {
    return httpRes.status(400).json({ error: validationResponse.message });
  }
  const event = new Event(
    requestBody.name,
    requestBody.start_datetime,
    requestBody.duration
  );
  
  const response = await createEvent(event);
  return httpRes.status(201).json({ message: "Event created successfully" });
});

module.exports = router;
