class Event {
  name = "";
  startTime = "";
  duration = "";
  constructor(name, startTime, duration) {
    this.name = name;
    this.startTime = startTime;
    this.duration = duration;
  }
}

module.exports = Event;
