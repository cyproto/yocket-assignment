const fs = require("fs");

const initiate = (eventData) => {
  if (fs.existsSync("events.json")) return;
  const response = fs.writeFileSync("events.json", JSON.stringify([eventData]));
  return response;
};

const fileWriter = async (eventData) => {
  var json = await fileReader();
  json.push(eventData);
  const response = fs.writeFileSync("events.json", JSON.stringify(json));
  return response;
};

const fileReader = async () => {
  const response = fs.readFileSync("events.json");
  return JSON.parse(response);
};

module.exports = { initiate, fileWriter, fileReader };
