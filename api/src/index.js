const axios = require("axios");
const express = require("express");
const { connectDb } = require("./helpers/db");
const app = express();
const { host, port, db, authApiUrl } = require("./configuration");

const startServer = () => {
  app.listen(port, () => {
    console.log(`Started api service on port: ${port}`);
    console.log(`On host: ${host}`);
    console.log(`On database: ${db}`);
  });
};

app.get("/test", (req, res) => {
  res.send("API server is working correctly!");
});

app.get("/testcurrentuser", (req, res) => {
  axios.get(authApiUrl + "/currentUser").then((response) => {
    res.json({
      testcurrentuser: true,
      currentUserFromAuth: response.data
    });
  });
});

app.get("/api/testapidata", (req, res) => {
  res.json({
    testwithapi: true
  });
});

connectDb()
  .on("error", console.log)
  .on("disconnected", connectDb)
  .once("open", startServer);
