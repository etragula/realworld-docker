const express = require("express");
const { connectDb } = require("./helpers/db");
const app = express();
const axios = require("axios");
const { host, port, db, apiUrl } = require("./configuration");

const startServer = () => {
  app.listen(port, () => {
    console.log(`Started auth service on port: ${port}`);
    console.log(`On host: ${host}`);
    console.log(`On database: ${db}`);
  });
};

app.get("/test", (req, res) => {
  res.send("AUTH server is working correctly!");
});

app.get("/api/currentUser", (req, resp) => {
  resp.json({
    id: "1234",
    email: "foo@gmail.com",
  });
});

app.get("/testwithapidata", (req, resp) => {
  axios.get(apiUrl + "/testapidata").then((response) => {
    resp.json({
      tetestapidata: response.data.testwithapi
    });
  });
});

connectDb()
  .on("error", console.log)
  .on("disconnected", connectDb)
  .once("open", startServer);
