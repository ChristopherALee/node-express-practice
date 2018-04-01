// Starting a server
// Express is a Node module, so in order to use it, we will need to import it into our program file. To create a server, the imported 'express' function must be invoked.
const express = require("express");
const app = express();

const PORT = process.env.PORT || 4001;

// This is used to make sure that once the server is started, you can reload the browser and see the Express Yourself machine.
app.use(express.static("public"));

const expressions = [];

// GET request for /expressions path
app.get("/expressions", (req, res, next) => {
  // console.log(res);

  // Express servers use .send() or .json() to send responses from HTTP requests.
  // .send() will take any input and put it in the response body.
  // .json() sends any JS object passed into it.
  app.send(expressions);
  app.json(expressions);
});

// GET request with a single expression path
app.get("/expressions/:id", (req, res, next) => {
  const foundExpression = getElementById(req.params.id, expressions);
  res.send(foundExpression);
});

// 'PORT' is where the server is listening from and the callback in the 2nd argument is invoked when the server is running and ready to receive responses.
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
