const express = require("express");
const bodyParser = require("body-parser");
const rpcMethods = require("./routes/api");

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
app.use("/api", rpcMethods);

const PORT = process.env.PORT || 5000;

server = app.listen(PORT, () =>
  console.log(`Server listening on port ${PORT}`)
);
