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

      var date1 = new Date(),
        date2 = new Date(date1);
      date2.setMinutes(date1.getMinutes() + 10);
      if (
        new Date(event.start_datetime).getTime() >= new Date().getTime() &&
        new Date(event.start_datetime).getTime() <= date2.getTime()
      ) {
        response.live.push(event);
      } else if (
        new Date(event.start_datetime).getTime() >= new Date().getTime()
      ) {
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
