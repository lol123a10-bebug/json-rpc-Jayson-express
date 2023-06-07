const express = require("express");
const jayson = require("jayson");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

const human = {
  hello: (args, callback) => {
    callback(null, "Hi");
  },
};

const cat = {
  sleep: (args, callback) => {
    callback(null, "mzzzz");
  },
};

app.post("/human", jayson.server(human).middleware());

app.post("/cat", jayson.server(cat).middleware());

app.listen(3000);
