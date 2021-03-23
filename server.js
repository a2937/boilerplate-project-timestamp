// server.js
// where your node app starts

// init project
require('dotenv').config();
var { TimeHandler } = require("./timeHandler");
var express = require('express');
var helmet = require('helmet');
var app = express();
app.use(helmet());
// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint...
app.get("/api/timestamp/:timestamp", function (req, res) {
  var time = req.params.timestamp;
  try {
    var handler = new TimeHandler();
    if (handler.isTimestamp(time)) {
      var properTime = parseInt(time);
      var newDate = handler.parseDate(time);
      res.json({
        utc: newDate.toString(),
        unix: properTime
      })
    }
    else {
      var newDate = handler.parseDate(time);
      var unixTimeStamp = newDate.getTime() / 1000;
      res.json({
        utc: newDate.toString(),
        unix: unixTimeStamp
      })
    }
  }
  catch (ex) {
    res.json({
      error: "Invalid Date"
    })
  }

});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
