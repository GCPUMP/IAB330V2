const express = require('express');
const app = express();
const cors = require('cors');









app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});







app.listen(3001, () => console.log('Listening at port 3001'))

module.exports = app;