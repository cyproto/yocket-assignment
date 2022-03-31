class Event {
  name = "";
  start_datetime = "";
  duration = "";
  constructor(name, start_datetime, duration) {
    this.name = name;
    this.start_datetime = new Date(start_datetime * 1000);
    this.duration = duration;
  }
}

module.exports = Event;
