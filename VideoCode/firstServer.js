// this looks for a package called express
const express = require('express');

const app = express();

app.listen(3000, () => {
  console.log("Server running on port 3000")
});

