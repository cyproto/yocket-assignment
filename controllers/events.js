const { fileReader, fileWriter } = require("../utils/fileHandler");

const getEvents = async () => {
  return fileReader().then((res) => {
    const response = {
      upcoming: [],
      live: [],
    };
    res.forEach((event) => {
      var date1 = new Date(),
        date2 = new Date(date1);
      date2.setMinutes(date1.getMinutes() + 10);

      if (
        event.startTime >= new Date().getTime() &&
        event.startTime <= date2.getTime()
      ) {
        response.live.push(event);
      } else if (event.startTime >= new Date().getTime()) {
        response.upcoming.push(event);
      }
    });

    return response;
  });
};

const createEvent = async (event) => {
  return fileWriter(event).then((res) => res);
};

module.exports = {
  getEvents,
  createEvent,
};
