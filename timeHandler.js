class TimeHandler {

  /**
   * Checks if the given value is a
   * valid time stamp
   * @param {String} time the value to check to see if it is a timestamp expressed as a string
   * @returns {boolean} if the provided input is a Unix timestamp
   */
  isTimestamp(time) {
    //Does it consist of only numbers
    if (parseFloat(time) == NaN) {
      return false;
    }
    else {
      var date = new Date(time);
      //if the date is a valid number
      //that can't be read by the Date object
      //and it is a string then it must be
      //a time stamp
      if (isNaN(date.getTime())
        && typeof time == "string") {
        return true;
      }
      else {
        return false;
      }
    }
  }

  /**
   * Determines if the string can be parsed
   * by the JavaScript Date object.
   * @param {String} time value to test
   * @returns {boolean} true if the given input appears to be a date or timestamp
   */
  isValidDate(time) {
    var date;
    if (this.isTimestamp(time)) {
      var timeAsNumber = parseFloat(time);
      date = new Date(timeAsNumber);
    }
    else {
      date = new Date(time);
    }
    return isNaN(date.getTime()) == false;
  }

  /**
   *
   * @param {String} time
   * @returns {Date} the Date object or today's Date if it cannot be processed
   */
  parseDate(time) {
    if (time.length == 0 || time.trim() == "") {
      return new Date();
    }
    else {
      if (this.isTimestamp(time)) {
        var timeAsNumber = parseInt(time);
        return new Date(timeAsNumber);
      }
      else {
        var newDate = new Date(time);
        return newDate;
      }
    }
  }
}

module.exports = { TimeHandler };
