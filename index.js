const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.join({ message: "API running on PORT 4000" });
});
app.listen(PORT, (req, res) => {
  console.log(`Server started on PORT ${PORT}`);
});
