var validator = require("validator");

const validateEvent = (event) => {
  if (!event.name || !event.start_datetime || !event.duration) {
    return { isValid: false, message: "Event is missing required fields" };
  }

  if (
    validator.isEmpty(event.name) ||
    !validator.isDate(new Date(event.start_datetime))
  ) {
    return { isValid: false, message: "Invalid event values." };
  }

  return { isValid: true };
};

module.exports = validateEvent;
