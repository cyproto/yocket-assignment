const dbClient = require("../utils/dbconnection");
const getEvents = async () => {
  const cursor = await dbClient();
  if (!cursor) {
    return [];
  }

  // This ideally should be inside the events model class, which can extend a generic query generator class, which in turn will generate and execute the query for us.
  const res = await cursor.query("SELECT * from events", []);
  const response = {
    upcoming: [],
    live: [],
  };

  cursor.end();
  if (!res) {
    return response;
  }
  res.rows.forEach((event) => {
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
};

const createEvent = async (event) => {
  const cursor = await dbClient();
  if (!cursor) {
    return [];
  }

  // This ideally should be inside the events model class, which can extend a generic query generator class, which in turn will generate and execute the query for us.
  cursor.query(
    "INSERT INTO events(name, start_datetime, duration) values($1, $2, $3) returning id",
    [event.name, event.start_datetime, event.duration],
    (err, res) => {
      cursor.end();
      if (err) {
        return false;
      }
      return res.rows[0].id;
    }
  );
};

module.exports = {
  getEvents,
  createEvent,
};
