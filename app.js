const express = require("express");
const app = express();
const { initiate } = require("./utils/fileHandler");
const Event = require("./models/event");
const port = 3000;

// Invoke initiate
const event = new Event("Dummy event", Date.now(), 30);
app.use((req, res, next) => {
  initiate(event);
  next();
});

app.use(express.json());
app.use("/", require("./routes/eventRoutes"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
