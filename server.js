// require express
const express = require('express');

// initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(express.static("public"));

require("./routes/apiroutes")(app);
require("./routes/htmlroutes")(app);


app.listen(PORT, () => console.log(`Listen on PORT: http://localhost:${PORT}`));