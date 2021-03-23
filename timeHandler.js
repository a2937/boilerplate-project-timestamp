class TimeHandler {

  /**
   *
   * @param {String} time
   * @returns {boolean} if the provided input is a Unix timestamp
   */
  isTimestamp(time) {
    if (time.indexOf("-") != -1 || time.indexOf("/") != -1) {
      return false;
    }
    else {
      return true;
    }
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
