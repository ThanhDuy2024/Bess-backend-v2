require('dotenv').config()
const express = require("express");
const db = require("./configs/database.config");
const indexRoute = require("./routes/index.route");
const app = express();
const port = process.env.PORT
db.connectDb();
app.use('/api', indexRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})